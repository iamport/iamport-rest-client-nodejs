/*!
 * iamport
 * Copyright(c) 2016 Seungjae Lee (a0ly)
 * MIT Licensed
 */

'use strict';

var Promise = require('bluebird');
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
        deffered = Promise.defer(),
        API_BASE, formData;
    
    if(spec.command) {
      apiParams.push(spec.command);
    }

    if(spec.urlParam) {
      if( hasOwn.call(param, spec.urlParam) ) {
        apiParams.push( param[spec.urlParam] );
      } else {
        deffered.reject(new Error('Param missing: ' + spec.urlParam));
        return deffered.promise;
      }
    }

    if(spec.require && spec.require.length) {
      for(var i=0; i<spec.require.length; i++) {
        if (!hasOwn.call( param, spec.require[i] )) {
          deffered.reject(new Error('Param missing: ' + spec.require[i]));
          return deffered.promise;
        }
      }
    }

    API_BASE = apiParams.join('/');

    if( requestMethod === 'POST' ) formData = param;

    return _this._makeRequest(requestMethod, API_BASE, formData);
  };
}

/**
 * Module exports.
 * @public
 */
module.exports = iamportMethod;
