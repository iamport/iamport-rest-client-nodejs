/*!
 * iamport
 * Copyright(c) 2016 Seungjae Lee (a0ly)
 * MIT Licensed
 */

'use strict';

var querystring = require('querystring');
var Promise = require('bluebird');
var _ = require('lodash');
var hasOwn = {}.hasOwnProperty;

/** method 생성 함수
 * API path 생성
 * URL Param, Form Param require check
 * 
 * @returns resource method [function]
 * @public
*/
function iamportMethod (spec) {
  var requestMethod = (spec.method || 'GET').toUpperCase();
  return function(param) {
    param = param || {};

    var _this = this,
        apiParams = [this._host, this.path],
        API_BASE, formData;
    
    if(spec.command) {
      apiParams.push(spec.command);
    }

    if(spec.urlParam) {
      if( hasOwn.call(param, spec.urlParam) ) {
        apiParams.push( param[spec.urlParam] );
        param = _.omit(param, spec.urlParam);
      } else {
        return new Promise(function(resolve, reject) {
          reject(new Error('Param missing: ' + spec.urlParam));
        });
      }
    }

    if(spec.require && spec.require.length) {
      for(var i=0; i<spec.require.length; i++) {
        if (!hasOwn.call( param, spec.require[i] )) {
          return new Promise(function(resolve, reject) {
            reject(new Error('Param missing: ' + spec.require[i]));
          });
        }
      }
    }

    API_BASE = apiParams.join('/');

    if( requestMethod === 'POST' ) formData = param;
    else if (Object.keys(param).length > 0) API_BASE += '?' + querystring.stringify(param);

    return _this._makeRequest(requestMethod, API_BASE, formData);
  };
}

/**
 * Module exports.
 * @public
 */
module.exports = iamportMethod;
