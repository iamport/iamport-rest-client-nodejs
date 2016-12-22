/*!
 * iamport
 * Copyright(c) 2016 Seungjae Lee (a0ly)
 * MIT Licensed
 */

'use strict';

var Promise = require('bluebird'),
    request = require('request'),
    util = require('./util');

Resource.extend = util.protoExtend;
Resource.errorStates = [400, 401, 404];
Resource.iamportMethod = require('./iamportMethod');

/**
 * Resource constructor.
 *
 * @param {iamport instance} 
 * @constructor
 */
function Resource(iamport) {
  this._iamport = iamport;
  this._host = iamport._host;
}

Resource.prototype.path = '';
Resource.prototype._makeRequestOnce = function(method, url, formData, options) {
  options = options || {};
  var _this = this;
  return this._getToken(options.forceRefreshToken)
    .then(function(token) {
      return new Promise(function(resolve, reject) {
        var deffered = { resolve: resolve, reject: reject };
        request({
          url: url,
          method: method,
          encoding: 'utf8',
          json: true,
          body: formData,
          headers: { 'Authorization': token.access_token }
        })
        .on('response', _this._responseHandler(deffered) )
        .on('error', _this._errorHandler(deffered) );
      });
    });
};

Resource.prototype._makeRequest = function(method, url, formData) {
  var _this = this;
  return this._makeRequestOnce(method, url, formData)
    .catch(function(err) {
      if (err.code === 'HTTP_401') // Token might expire during sending the request. Try again with new token
        return _this._makeRequestOnce(method, url, formData, { forceRefreshToken: true });
      else throw err;
    });
};

/**
 * 토큰을 발급합니다.
 * @see {@link https://api.iamport.kr/#!/authenticate/getToken}
 *
 * @return {promise} string access token
 * @private
 */
Resource.prototype._getToken = function(forceRefresh) {
  var _this = this;

  return new Promise(function(resolve, reject) {
    var token;
    if (!forceRefresh) token = _this._iamport._getTokenCache();
    if( token ) {
      // return token cache
      resolve( token );
    } else { 
      // refresh token and then return it
      request({
        url: [_this._host,'users','getToken'].join('/'),
        method: 'POST',
        encoding: 'utf8',
        json: true,
        body: {
          imp_key: _this._iamport._impKey,
          imp_secret: _this._iamport._impSecret
        }
      })
      .on('response', function(res){
        if( Resource.errorStates.indexOf(res.statusCode) >= 0 ) {
          var err = new Error(res.statusCode);
          err.code = 'HTTP_' + res.statusCode;
          reject(err);
        } else {
          res.on('data', function(body) {
            var result;
            try {
              result = JSON.parse(body.toString());
            }
            catch(e) {
              return reject(e);
            }
            var token = result.response;
            if ( token ) {
              _this._iamport._setTokenCache( token );
              resolve( token );
            } else {
              reject(new Error('Fail to refresh token'));
            }
          });
        }
      })
      .on('error', reject);
    }
  });
};

Resource.prototype._responseHandler = function(deffered) {
  return function(res) {
    var buffer = [], err;
    if( Resource.errorStates.indexOf(res.statusCode) >= 0 ) {
      err = new Error(res.statusCode);
      err.code = 'HTTP_' + res.statusCode;
      deffered.reject(err);
    } else {
      res.on('data', function(chunk) {
        buffer.push(chunk);
      });
      res.on('end', function(body) {
        var result;
        try {
          result = JSON.parse(buffer.join(''));
        }
        catch(e) {
          return deffered.reject(e);
        }
        if( result.code !== 0 ) {
          err = new Error(result.message);
          err.code = 'IAMPORT_' + result.code;
          deffered.reject( err );
        } else {
          deffered.resolve( result.response );
        }
      });
    }
  }
};

Resource.prototype._errorHandler = function(deffered) {
  return function(error) {
    if (!(error instanceof Error)) error = new Error(error);
    deffered.reject(new Error(error))
  };
};

module.exports = Resource;
