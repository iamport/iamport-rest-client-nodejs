/*!
 * iamport
 * Copyright(c) 2015 Seungjae Lee
 * MIT Licensed
 */

'use strict';

var rp = require('request-promise'),
    util = require('./util');

Iamport.DEFAULT_HOST = 'https://api.iamport.kr';
Iamport.DEFAULT_KEY = 'imp_apiKey';
Iamport.DEFAULT_SECRET = 'ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f'

var resources = {
  Authenticate : require('./resources/Authenticate'),
  Payment : require('./resources/Payments'),
  Substribe : require('./resources/Subscribe')
};

Iamport.resources = resources;

/**
 * Iamport constructor.
 *
 * @param {object} options {impKey, impSecret}
 * @property {string} impKey REST API Key (default: 아임포트 테스트 키)
 * @property {string} impSecret REST API Secret Key (default: 아임포트 테스트 시크릿 키)
 * @constructor
 */
function Iamport(options) {
  if(!(this instanceof Iamport)) {
    return new Iamport(options);
  }
  options || (options = {});
  this._host = Iamport.DEFAULT_HOST;
  this._impKey = options.impKey || Iamport.DEFAULT_KEY;
  this._impSecret = options.impSecret || Iamport.DEFAULT_SECRET;
  this._preResources();
}

Iamport.prototype._preResources = function() {
  for (var name in resources) {
    this [
      name[0].toLowerCase() + name.substring(1)
    ] = new resources[name](this);
  }
};

/**
 * 토큰을 발급합니다.
 * @see {@link https://api.iamport.kr/#!/authenticate/getToken}
 *
 * @return {promise} string access token
 * @private
 */
Iamport.prototype._getToken = function() {
  var _this = this;

  var body = {
    imp_key: _this.impKey,
    imp_secret: _this.impSecret
  };

  return rp({
    url: _this._host + '/users/getToken',
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

/**
 * 아임포트 고유 아이디로 결제 정보를 조회합니다.
 * @see {@link https://api.iamport.kr/#!/payments/getPaymentByImpUid}
 *
 * @returns {promise} json 결제 정보
 * @public
 */
Iamport.prototype.getPaymentByImpUid = function(impUid) {
  var _this = this;

  return _this._getToken()
    .then(function(token) {
      return rp({
        url: _this._host + '/payments/' + impUid + '?_token=' + token,
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

/**
 * 상점 고유 아이디로 결제 정보를 조회합니다.
 * @see {@link https://api.iamport.kr/#!/payments/getPaymentByMerchantUid}
 *
 * @todo 구현
 *
 * @returns {promise} json 결제 정보
 * @public
 */
Iamport.prototype.getPaymentByMerchantUid = function(merchantUid) {
};

/**
 * 여러 결제 정보를 한꺼번에 조회합니다.
 * @see {@link https://api.iamport.kr/#!/payments/getPaymentsByStatus}
 *
 * @todo 구현
 *
 * @param {string} status
 * @param {number} page
 * @returns {promise} array 결제 정보
 * @public
 */
Iamport.prototype.getPaymentsByStatus = function(status, page) {
};

/**
 * 결제를 취소합니다.
 * @see {@link https://api.iamport.kr/#!/payments/cancelPayment}
 *
 * @todo param을 object로 받아서 처리
 * @todo impUid, merchantUid 선택적으로 받을 수 있게
 * @todo 취소사유, 부분취소요청 추가
 *
 * @param {string} impUid
 * @param {object} refundInfo
 * @returns {promise} json 결제 정보
 * @public
 */
Iamport.prototype.cancelPayment = function(impUid, refundInfo) {
  var _this = this;

  refundInfo || (refundInfo = {});

  var body = {
    imp_uid: impUid
  };

  if (refundInfo.refundHolder && refundInfo.refundBankCode && refundInfo.refundAccount) {
    body.refund_holder = bankInfo.refundHolder;
    body.refund_bank = bankInfo.refundBankCode;
    body.refund_account = bankInfo.refundAccount;
  }

  return _this._getToken()
    .then(function(token) {
      return rp({
        url: _this._host + '/payments/cancel?_token=' + token,
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

/**
 * Module exports.
 * @public
 */
module.exports = Iamport;