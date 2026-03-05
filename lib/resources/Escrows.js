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

  path: 'escrows',

  /** method 생성
   * 에스크로 결제 건에 대한 배송정보를 등록하실 수 있습니다.
   * @see {@link https://api.iamport.kr/#!/escrow.logis/escrow_logis_save}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  create: iamportMethod({
    method: 'POST',
    command: 'logis',
    urlParam: 'imp_uid',
    require: ['sender','receiver','logis']
  }),

  /** method 생성
   * 에스크로 결제 건에 대한 배송정보를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/escrow.logis/escrow_logis_get}
   *
   * @returns {promise} json 배송 정보
   * @public
   */
  get: iamportMethod({
    method: 'GET',
    command: 'logis',
    urlParam: 'imp_uid'
  }),

  /** method 생성
   * 에스크로 결제 건에 대한 배송정보를 수정합니다.
   * @see {@link https://api.iamport.kr/#!/escrow.logis/escrow_logis_update}
   *
   * @returns {promise} json 배송 정보
   * @public
   */
  update: iamportMethod({
    method: 'PUT',
    command: 'logis',
    urlParam: 'imp_uid',
    require: ['sender','receiver','logis']
  }),
});
