'use strict';

var rp = require('request-promise');

module.exports = Iamport;

function Iamport(options) {
  this._host = 'https://api.iamport.kr';
  this.impKey = options.impKey || 'imp_apikey';
  this.impSecret = options.impSecret ||
    'ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f';
}

Iamport.prototype._getToken = function() {
  var self = this;

  var body = {
    imp_key: self.impKey,
    imp_secret: self.impSecret
  };

  return rp({
    url: self._host + '/users/getToken',
    method: 'POST',
    json: true,
    body: body
  }).then(function(response) {
    if (!response.response) {
      throw new Error(response.message);
    }
    return response.response.access_token;
  });
};

Iamport.prototype.getPaymentByImpUid = function(impUid) {
  var self = this;

  return self._getToken()
    .then(function(token) {
      return rp({
        url: self._host + '/payments/' + impUid + '?_token=' + token,
        method: 'GET',
        json: true
      });
    }).then(function(response) {
      if (!response.response) {
        throw new Error(response.message);
      }
      return response.response;
    });
};

Iamport.prototype.getPaymentByMerchantUid = function(merchantUid) {
};

Iamport.prototype.getPaymentsByStatus = function(status, page) {
};

Iamport.prototype.cancelPayment = function(impUid, refundInfo) {
  var self = this;

  refundInfo = refundInfo || {};

  var body = {
    imp_uid: impUid
  };

  if (refundInfo.refundHolder && refundInfo.refundBankCode && refundInfo.refundAccount) {
    body.refund_holder = bankInfo.refundHolder;
    body.refund_bank = bankInfo.refundBankCode;
    body.refund_account = bankInfo.refundAccount;
  }

  return self._getToken()
    .then(function(token) {
      return rp({
        url: self._host + '/payments/cancel?_token=' + token,
        method: 'POST',
        json: true,
        body: body
      });
    }).then(function(response) {
      if (!response.response) {
        throw new Error(response.message);
      }
      return response.response;
    });
};
