
'use strict';

var Promise = require('bluebird');
var hasOwn = {}.hasOwnProperty;

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
        deffered.reject(new Error('param missing' + spec.urlParam));
        return deffered.promise;
      }
    }

    API_BASE = apiParams.join('/');

    if( requestMethod === 'POST' ) formData = param;

    return _this._makeRequest(requestMethod, API_BASE, formData);
  };
}

module.exports = iamportMethod;