/*!
 * iamport
 * Copyright(c) 2016 Seungjae Lee (a0ly)
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

  path: 'subscribe',

  /** method 생성
   * 비인증 결제요청
   * @see {@link https://api.iamport.kr/#!/subscribe/onetime}
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
   * @see {@link https://api.iamport.kr/#!/subscribe/again}
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
   * @see {@link https://api.iamport.kr/#!/subscribe/schedule}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  schedule: iamportMethod({
    method: 'POST',
    command: 'schedule',
    urlParam: null,
    require: ['customer_uid','card_number','expiry','birth','pwd_2digit','schedules']
  }),

  /** method 생성
   * 비인증 결제요청예약 취소
   * @see {@link https://api.iamport.kr/#!/subscribe/unschedule}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  unschedule: iamportMethod({
    method: 'POST',
    command: 'unschedule',
    urlParam: null,
    require: ['customer_uid']
  }),

  /** method 생성
   * 구매자의 빌키 정보 조회
   * @see {@link https://api.iamport.kr/#!/subscribe.customer/customer_view}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  getCustomers: iamportMethod({
    method: 'GET',
    command: 'customers',
    urlParam: 'customer_uid'
  }),

  /** method 생성
   * 구매자에 대해 빌키 발급 및 저장
   * @see {@link https://api.iamport.kr/#!/subscribe.customer/customer_save}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  createCustomers: iamportMethod({
    method: 'POST',
    command: 'customers',
    urlParam: 'customer_uid',
    require: ['card_number','expiry','birth','pwd_2digit']
  }),

  /** method 생성
   * 구매자의 빌키 정보 삭제(DB에서 빌키를 삭제[delete] 합니다)
   * @see {@link https://api.iamport.kr/#!/subscribe.customer/customer_delete}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  deleteCustomers: iamportMethod({
    method: 'DELETE',
    command: 'customers',
    urlParam: 'customer_uid'
  })

});
