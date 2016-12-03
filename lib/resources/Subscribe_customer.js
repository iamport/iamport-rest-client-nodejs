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
