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
    require: ['customer_uid','merchant_uid','amount','name']
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
  }),

  /** method 생성
   * 예약된 결제목록을 조회합니다.
   * @see {@link https://api.iamport.kr/#!/subscribe/payments/schedule}
   *
   * @returns {promise} json 스케줄 정보
   * @public
   */
  getSchedules: iamportMethod({
    method: 'GET',
    command: 'schedule',
    urlParam: null,
    require: ['schedule_from', 'schedule_to']
  }),

  /** method 생성
   * 상점 고유 아이디로 예약된 결제를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/subscribe/payments/schedule/merchant_uid}
   *
   * @returns {promise} json 스케줄 정보
   * @public
   */
  getScheduleByMerchantUid: iamportMethod({
    method: 'GET',
    command: 'schedule',
    urlParam: 'merchant_uid'
  }),

  /** method 생성
   * 상점 고유 아이디로 예약된 결제를 수정합니다.
   * @see {@link https://api.iamport.kr/#!/subscribe/payments/schedule/merchant_uid}
   *
   * @returns {promise} json 스케줄 정보
   * @public
   */
  updateSchedule: iamportMethod({
    method: 'PUT',
    command: 'schedule',
    urlParam: 'merchant_uid',
    require: ['schedule_at']
  }),

  /** method 생성
   * 예약된 결제를 재시도합니다.
   * @see {@link https://api.iamport.kr/#!/subscribe/payments/schedule/merchant_uid/retry}
   *
   * @returns {promise} json 스케줄 정보
   * @public
   */
  retrySchedule: iamportMethod({
    method: 'POST',
    command: 'schedule',
    urlParam: 'merchant_uid',
    command2: 'retry'
  }),

  /** method 생성
   * 예약된 결제를 재예약합니다.
   * @see {@link https://api.iamport.kr/#!/subscribe/payments/schedule/merchant_uid/reschedule}
   *
   * @returns {promise} json 스케줄 정보
   * @public
   */
  rescheduleSchedule: iamportMethod({
    method: 'POST',
    command: 'schedule',
    urlParam: 'merchant_uid',
    command2: 'reschedule',
    require: ['schedule_at']
  }),

  /** method 생성
   * 구매자의 customer_uid로 예약된 결제목록을 조회합니다.
   * @see {@link https://api.iamport.kr/#!/subscribe/payments/schedule/customers/customer_uid}
   *
   * @returns {promise} json 스케줄 정보
   * @public
   */
  getSchedulesByCustomerUid: iamportMethod({
    method: 'GET',
    command: 'schedule/customers',
    urlParam: 'customer_uid',
    require: ['from', 'to']
  })

});
