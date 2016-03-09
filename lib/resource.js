
'use strict';

var Promise = require('bluebird'),
    rp = require('request-promise'),
    util = require('./util');

Resource.extend = util.protoExtend;
Resource.iamportMethod = require('./iamportMethod');

function Resource(iamport) {
  this._iamport = iamport;
  this._host = iamport._host;
}

Resource.prototype.path = '';
Resource.prototype._makeRequest = function(method, url, formData) {
  return rp({
    url : url,
    method : method,
    json : true,
    body : formData
  })
  .then(function(res){
    if (res.response) {
      return res.response;
    } else {
      new Error(res.error);
    }
  })
};

module.exports = Resource;
