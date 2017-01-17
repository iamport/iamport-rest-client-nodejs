/*!
 * iamport
 * MIT Licensed
 */

'use strict';

var resource = require('../resource'),
    iamportMethod = resource.iamportMethod;

/**
 * Module exports.
 * @public
 */
module.exports = resource.extend({

  path: 'subscribe/payments',

  /** method 생성
   * 비인증 결제요청
   * @see {@link https://api.iamport.kr/#!/subscribe/payments/onetime}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  onetime: iamportMethod({
    method: 'POST',
    command: 'onetime',
    urlParam: null,
    require: ['merchant_uid','amount','card_number','expiry','birth','pwd_2digit']
  }),

  /** method 생성
   * 비인증 결제요청
   * @see {@link https://api.iamport.kr/#!/subscribe/payments/again}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  again: iamportMethod({
    method: 'POST',
    command: 'again',
    urlParam: null,
    require: ['customer_uid','merchant_uid','amount']
  }),

  /** method 생성
   * 비인증 결제요청예약
   * @see {@link https://api.iamport.kr/#!/subscribe/payments/schedule}
   *
   * @optional cardInfo {card_number,expiry,birth,pwd_2digit}
   * @returns {promise} json 결제 정보
   * @public
   */
  schedule: iamportMethod({
    method: 'POST',
    command: 'schedule',
    urlParam: null,
    require: ['customer_uid','schedules']
  }),

  /** method 생성
   * 비인증 결제요청예약 취소
   * @see {@link https://api.iamport.kr/#!/subscribe/payments/unschedule}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  unschedule: iamportMethod({
    method: 'POST',
    command: 'unschedule',
    urlParam: null,
    require: ['customer_uid']
  })

});
