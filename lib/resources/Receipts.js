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

  path: 'receipts',

  /** method 생성
   * 아임포트 고유 아이디로 현금영수증 정보를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/receipts/getReceipt}
   *
   * @returns {promise} json 현금영수증 정보
   * @public
   */
  get: iamportMethod({
    method: 'GET',
    command: null,
    urlParam: 'imp_uid'
  }),

  /** method 생성
   * 아임포트 고유 아이디로 현금영수증을 발행합니다.
   * @see {@link https://api.iamport.kr/#!/receipts/issueReceipt}
   *
   * @returns {promise} json 현금영수증 정보
   * @public
   */
  create: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    require: ['identifier']
  }),

  /** method 생성
   * 아임포트 고유 아이디로 현금영수증 발행을 취소합니다.
   * @see {@link https://api.iamport.kr/#!/receipts/cancelReceipt}
   *
   * @returns {promise} json 현금영수증 정보
   * @public
   */
  delete: iamportMethod({
    method: 'DELETE',
    command: null,
    urlParam: 'imp_uid'
  }),

  /** method 생성
   * 상점 고유 아이디로 외부 현금영수증 정보를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/receipts/getExternalReceipt}
   *
   * @returns {promise} json 현금영수증 정보
   * @public
   */
  getExternal: iamportMethod({
    method: 'GET',
    command: 'external',
    urlParam: 'merchant_uid'
  }),

  /** method 생성
   * 상점 고유 아이디로 외부 현금영수증을 발행합니다.
   * @see {@link https://api.iamport.kr/#!/receipts/issueExternalReceipt}
   *
   * @returns {promise} json 현금영수증 정보
   * @public
   */
  createExternal: iamportMethod({
    method: 'POST',
    command: 'external',
    urlParam: 'merchant_uid',
    require: ['channel_key', 'name', 'amount', 'identifier']
  }),

  /** method 생성
   * 상점 고유 아이디로 외부 현금영수증 발행을 취소합니다.
   * @see {@link https://api.iamport.kr/#!/receipts/cancelExternalReceipt}
   *
   * @returns {promise} json 현금영수증 정보
   * @public
   */
  deleteExternal: iamportMethod({
    method: 'DELETE',
    command: 'external',
    urlParam: 'merchant_uid'
  })

});
