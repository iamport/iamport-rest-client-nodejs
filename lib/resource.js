/*!
 * iamport
 * Copyright(c) 2016 Seungjae Lee (a0ly)
 * MIT Licensed
 */

'use strict';

var Promise = require('bluebird'),
    request = require('request'),
    _ = require('lodash'),
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
Resource.prototype._makeRequest = function(method, url, formData) {
  var _this = this;
  return this._getToken()
    .then(function(token) {
      var deffered = Promise.defer();
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
      return deffered.promise;
    });
};

/**
 * 토큰을 발급합니다.
 * @see {@link https://api.iamport.kr/#!/authenticate/getToken}
 *
 * @return {promise} string access token
 * @private
 */
Resource.prototype._getToken = function( ) {
  var _this = this,
      deffered = Promise.defer();

  if( _this._iamport._getTokenCache() ) {
    // return token cache
    deffered.resolve( _this._iamport._getTokenCache() );
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
        deffered.reject(new Error(res.statusCode));
      } else {
        res.on('data', function(body) {
          var token = JSON.parse(body.toString()).response;
          _this._iamport._setTokenCache( token );
          deffered.resolve( _this._iamport._getTokenCache() );
        });
      }
    })
    .on('error', function(error){
      deffered.reject(new Error(error))
    });
  }

  return deffered.promise;
};

Resource.prototype._responseHandler = function(deffered) {
  return function(res) {
    var buffer = [];
    if( Resource.errorStates.indexOf(res.statusCode) >= 0 ) {
      deffered.reject(new Error(res.statusCode));
    } else {
      res.on('data', function(chunk) {
        buffer.push(chunk);
      });
      res.on('end', function(body) {
        var result = JSON.parse(buffer.join(''));
        if( result.code !== 0 ) {
          deffered.reject( new Error(result.message) );
        } else {
          deffered.resolve( result.response );
        }
      });
    }
  }
};

Resource.prototype._errorHandler = function(deffered) {
  return function(error) {
    deffered.reject(new Error(error))
  };
};

module.exports = Resource;
