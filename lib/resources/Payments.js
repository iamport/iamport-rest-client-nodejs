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
  }),

  /** method 생성
   * 아임포트 고유 아이디로 결제 잔액 정보를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/payments/getPaymentBalanceByImpUid}
   *
   * @param {Object}
   * @returns {promise} json 결제 잔액 정보
   * @public
   */
  getBalance: iamportMethod({
    method: 'GET',
    command: null,
    urlParam: 'imp_uid',
    command2: 'balance'
  }),

  /** method 생성
   * 여러 건의 결제 정보를 한꺼번에 조회합니다. (imp_uid[] 또는 merchant_uid[] 쿼리)
   * @see {@link https://api.iamport.kr/#!/payments/getPaymentsByImpUid}
   *
   * @param {Object}
   * @returns {promise} json 결제 정보 배열
   * @public
   */
  getByImpUids: iamportMethod({
    method: 'GET',
    command: null,
    urlParam: null
  }),

  /** method 생성
   * 상점 고유 아이디로 결제 정보 목록을 조회합니다.
   * @see {@link https://api.iamport.kr/#!/payments/getAllPaymentsByMerchantUid}
   *
   * @param {Object}
   * @returns {promise} json 결제 정보 목록
   * @public
   */
  getAllByMerchant: iamportMethod({
    method: 'GET',
    command: 'findAll',
    urlParam: 'merchant_uid',
    urlParam2: 'payment_status'
  }),

  /** method 생성
   * 사전등록된 결제정보를 수정합니다.
   * @see {@link https://api.iamport.kr/#!/payments.validation/updatePaymentPrepare}
   *
   * @param {Object}
   * @returns {promise} json 결제 정보
   * @public
   */
  updatePrepare: iamportMethod({
    method: 'PUT',
    command: 'prepare',
    urlParam: null,
    require: ['merchant_uid', 'amount']
  })

});
