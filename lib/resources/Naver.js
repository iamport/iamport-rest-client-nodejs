/*!
 * iamport
 * MIT Licensed
 */

'use strict';

var resource = require('../resource'),
    iamportMethod = resource.iamportMethod;

/**
 * Naver standalone endpoints (/naver/...)
 * @public
 */
var Naver = resource.extend({

  path: 'naver',

  /** method 생성
   * 네이버페이 상품주문 단건 조회
   * @see {@link https://api.iamport.kr/#!/naver/getProductOrder}
   *
   * @returns {promise} json 상품주문 정보
   * @public
   */
  getProductOrder: iamportMethod({
    method: 'GET',
    command: 'product-orders',
    urlParam: 'product_order_id'
  }),

  /** method 생성
   * 네이버페이 구매평 조회
   * @see {@link https://api.iamport.kr/#!/naver/getReviews}
   *
   * @returns {promise} json 구매평 정보
   * @public
   */
  getReviews: iamportMethod({
    method: 'GET',
    command: 'reviews',
    urlParam: null,
    require: ['channel_key', 'from', 'to', 'review_type']
  })

});

/**
 * Naver payment endpoints (/payments/{imp_uid}/naver/...)
 * @public
 */
var NaverPayment = resource.extend({

  path: 'payments',

  /** method 생성
   * 네이버페이 결제의 상품주문 목록 조회
   * @see {@link https://api.iamport.kr/#!/naver/getNaverProductOrders}
   *
   * @returns {promise} json 상품주문 목록
   * @public
   */
  getProductOrders: iamportMethod({
    method: 'GET',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/product-orders'
  }),

  /** method 생성
   * 네이버페이 결제의 현금성 결제금액 조회
   * @see {@link https://api.iamport.kr/#!/naver/getNaverCashAmount}
   *
   * @returns {promise} json 현금성 결제금액
   * @public
   */
  getCashAmount: iamportMethod({
    method: 'GET',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/cash-amount'
  }),

  /** method 생성
   * 네이버페이 발주처리
   * @see {@link https://api.iamport.kr/#!/naver/placeNaverOrder}
   *
   * @returns {promise} json 처리 결과
   * @public
   */
  place: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/place'
  }),

  /** method 생성
   * 네이버페이 발송처리
   * @see {@link https://api.iamport.kr/#!/naver/shipNaverOrder}
   *
   * @returns {promise} json 처리 결과
   * @public
   */
  ship: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/ship',
    require: ['delivery_method', 'dispatched_at']
  }),

  /** method 생성
   * 네이버페이 구매확인
   * @see {@link https://api.iamport.kr/#!/naver/confirmNaverOrder}
   *
   * @returns {promise} json 처리 결과
   * @public
   */
  confirm: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/confirm'
  }),

  /** method 생성
   * 네이버페이 취소 승인
   * @see {@link https://api.iamport.kr/#!/naver/approveCancelNaverOrder}
   *
   * @returns {promise} json 처리 결과
   * @public
   */
  approveCancel: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/approve-cancel'
  }),

  /** method 생성
   * 네이버페이 반품 승인
   * @see {@link https://api.iamport.kr/#!/naver/approveReturnNaverOrder}
   *
   * @returns {promise} json 처리 결과
   * @public
   */
  approveReturn: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/approve-return'
  }),

  /** method 생성
   * 네이버페이 취소 요청
   * @see {@link https://api.iamport.kr/#!/naver/cancelNaverOrder}
   *
   * @returns {promise} json 처리 결과
   * @public
   */
  cancel: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/cancel'
  }),

  /** method 생성
   * 네이버페이 반품 요청
   * @see {@link https://api.iamport.kr/#!/naver/requestReturnNaverOrder}
   *
   * @returns {promise} json 처리 결과
   * @public
   */
  requestReturn: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/request-return',
    require: ['delivery_method']
  }),

  /** method 생성
   * 네이버페이 반품 거부
   * @see {@link https://api.iamport.kr/#!/naver/rejectReturnNaverOrder}
   *
   * @returns {promise} json 처리 결과
   * @public
   */
  rejectReturn: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/reject-return',
    require: ['memo']
  }),

  /** method 생성
   * 네이버페이 반품 해결
   * @see {@link https://api.iamport.kr/#!/naver/resolveReturnNaverOrder}
   *
   * @returns {promise} json 처리 결과
   * @public
   */
  resolveReturn: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/resolve-return'
  }),

  /** method 생성
   * 네이버페이 반품 보류
   * @see {@link https://api.iamport.kr/#!/naver/withholdReturnNaverOrder}
   *
   * @returns {promise} json 처리 결과
   * @public
   */
  withholdReturn: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/withhold-return',
    require: ['memo']
  }),

  /** method 생성
   * 네이버페이 교환 재발송 수거완료
   * @see {@link https://api.iamport.kr/#!/naver/collectExchangedNaverOrder}
   *
   * @returns {promise} json 처리 결과
   * @public
   */
  collectExchanged: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/collect-exchanged'
  }),

  /** method 생성
   * 네이버페이 교환 재발송 발송처리
   * @see {@link https://api.iamport.kr/#!/naver/shipExchangedNaverOrder}
   *
   * @returns {promise} json 처리 결과
   * @public
   */
  shipExchanged: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/ship-exchanged',
    require: ['delivery_method']
  }),

  /** method 생성
   * 네이버페이 포인트 적립 요청
   * @see {@link https://api.iamport.kr/#!/naver/pointNaverOrder}
   *
   * @returns {promise} json 처리 결과
   * @public
   */
  point: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    command2: 'naver/point'
  })

});

module.exports = {
  Naver: Naver,
  NaverPayment: NaverPayment
};
