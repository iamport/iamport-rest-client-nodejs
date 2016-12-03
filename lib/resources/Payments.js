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

  path: 'payments',

  /** method 생성
   * 아임포트 고유 아이디로 결제 정보를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/payments/getPaymentByImpUid}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  getByImpUid: iamportMethod({
    method: 'GET',
    command: null ,
    urlParam: 'imp_uid'
  }),


  /** method 생성
   * 상점 고유 아이디로 결제 정보를 조회합니다.
   *
   * @see {@link https://api.iamport.kr/#!/payments/getPaymentByMerchantUid}
   *
   * @param {Object}
   * @returns {promise}
   * @public
   */
  getByMerchant: iamportMethod({
    method: 'GET',
    command: 'find',
    urlParam: 'merchant_uid'
  }),

  /** method 생성
   * 여러 결제 정보를 한꺼번에 조회합니다.
   * @see {@link https://api.iamport.kr/#!/payments/getPaymentsByStatus}
   *
   * @param {Object}
   * @returns {promise}
   * @public
   */
  getByStatus: iamportMethod({
    method: 'GET',
    command: 'status',
    urlParam: 'payment_status'
  }),

  /** method 생성
   * 결제를 취소합니다.
   * @see {@link https://api.iamport.kr/#!/payments/cancelPayment}
   *
   * @param {Object}
   * @returns {promise} json 결제 정보
   * @public
   */
  cancel: iamportMethod({
    method: 'POST',
    command: 'cancel',
    urlParam: null
  }),

  /** method 생성
   * 결제예정금액을 사전등록합니다.
   * @see {@link https://api.iamport.kr/#!/payments.validation/preparePayment}
   *
   * @param {Object}
   * @returns {promise} json 결제 정보
   * @public
   */
  prepare : iamportMethod({
    method: 'POST',
    command: 'prepare',
    urlParam: null,
    require: ['merchant_uid', 'amount']
  }),

  /** method 생성
   * 사전등록된 결제정보를 조회합니다
   * @see {@link https://api.iamport.kr/#!/payments.validation/getPaymentPrepareByMerchantUid}
   *
   * @param {Object}
   * @returns {promise} json 결제 정보
   * @public
   */
  getPrepare : iamportMethod({
    method: 'GET',
    command: 'prepare',
    urlParam: 'merchant_uid'
  })

});
