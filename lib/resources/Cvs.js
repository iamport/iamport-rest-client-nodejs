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

  path: 'cvs',

  /** method 생성
   * 편의점 결제를 요청합니다.
   * @see {@link https://api.iamport.kr/#!/cvs/issueCvs}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  create: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: null,
    require: ['channel_key', 'merchant_uid', 'amount']
  }),

  /** method 생성
   * 편의점 결제를 취소합니다.
   * @see {@link https://api.iamport.kr/#!/cvs/cancelCvs}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  delete: iamportMethod({
    method: 'DELETE',
    command: null,
    urlParam: 'imp_uid'
  })

});
