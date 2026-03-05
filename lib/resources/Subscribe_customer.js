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

  path: 'subscribe',

  /** method 생성
   * 구매자의 빌키 정보 조회
   * @see {@link https://api.iamport.kr/#!/subscribe.customer/customer_view}
   *
   * @returns {promise} json 결제 정보
   * @public
   */

  get: iamportMethod({
    method: 'GET',
    command: 'customers',
    urlParam: 'customer_uid'
  }),
  // legacy
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
  create: iamportMethod({
    method: 'POST',
    command: 'customers',
    urlParam: 'customer_uid',
    require: ['card_number','expiry','birth','pwd_2digit']
  }),
  // legacy
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
  delete: iamportMethod({
   method: 'DELETE',
   command: 'customers',
   urlParam: 'customer_uid'
  }),
  // legacy
  deleteCustomers: iamportMethod({
    method: 'DELETE',
    command: 'customers',
    urlParam: 'customer_uid'
  }),

  /** method 생성
   * 구매자의 빌링키로 결제된 결제목록 조회
   * @see {@link https://api.iamport.kr/#!/subscribe.customer/customer_payments}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  getPayments: iamportMethod({
    method: 'GET',
    command: 'customers',
    urlParam: 'customer_uid',
    command2: 'payments'
  }),

  /** method 생성
   * 여러 구매자의 빌키 정보를 한꺼번에 조회합니다.
   * @see {@link https://api.iamport.kr/#!/subscribe.customer/customer_view_multiple}
   *
   * @returns {promise} json 빌키 정보 목록
   * @public
   */
  getMultiple: iamportMethod({
    method: 'GET',
    command: 'customers',
    urlParam: null
  }),

  /** method 생성
   * 구매자의 빌링키로 예약된 결제 스케줄을 조회합니다.
   * @see {@link https://api.iamport.kr/#!/subscribe.customer/customer_schedules}
   *
   * @returns {promise} json 스케줄 정보
   * @public
   */
  getSchedules: iamportMethod({
    method: 'GET',
    command: 'customers',
    urlParam: 'customer_uid',
    command2: 'schedules',
    require: ['from', 'to']
  })

});
