
'use strict';

var resource = require('../resource'),
    iamportMethod = resource.iamportMethod;

/**
 * Module exports.
 * @public
 */
module.exports = resource.extend({
  
  path: 'payments',
  
  /**
   * 아임포트 고유 아이디로 결제 정보를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/payments/getPaymentByImpUid}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  getByImpUid: iamportMethod({ 
    method: 'GET',
    commend: null ,
    urlParam: 'imp_uid'
  }),
  

  /**
   * 상점 고유 아이디로 결제 정보를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/payments/getPaymentByMerchantUid}
   *
   * @todo 구현
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  getByMerchant: iamportMethod({ 
    method: 'GET',
    command: 'find',
    urlParam: 'merchant_uid'
  }),
  
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
  getByStatus: iamportMethod({ 
    method: 'GET',
    command: 'status',
    urlParam: 'payment_status'
  }),
  
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
  cancel: iamportMethod({ 
    method: 'POST',
    command: 'cancel',
    urlParam: null
  }),

  prepare : iamportMethod({
    method: 'POST',
    command: 'prepare',
    urlParam: null
  }),

  getPrepare : iamportMethod({
    method: 'GET',
    command: 'prepare',
    urlParam: 'merchant_uid'
  })

});
