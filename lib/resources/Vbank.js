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

  path: 'vbanks',

  /** method 생성
   * 희망하시는 은행, 예금주명으로 입금이 가능한 가상계좌를 생성할 수 있습니다.
   * @see {@link https://api.iamport.kr/#!/vbanks/createVbank}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  create: iamportMethod({
    method: 'POST',
    command: null ,
    urlParam: null,
    require: ['merchant_uid','amount','vbank_code','vbank_due','vbank_holder']
  }),
  
  /** method 생성
   * 희망하시는 은행, 계좌번호로 예금주명을 조회할 수 있습니다.
   * @see {@link https://api.iamport.kr/#!/vbanks/queryBankHolder}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  getHolder: iamportMethod({
    method: 'GET',
    command: 'holder',
    urlParam: null,
    require: ['bank_code','bank_num'],
  }),

  /** method 생성
   * 가상계좌 정보를 수정합니다. (입금기한, 금액 등)
   * @see {@link https://api.iamport.kr/#!/vbanks/updateVbank}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  update: iamportMethod({
    method: 'PUT',
    command: null,
    urlParam: 'imp_uid'
  }),

  /** method 생성
   * 가상계좌를 삭제(말소)합니다.
   * @see {@link https://api.iamport.kr/#!/vbanks/deleteVbank}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  delete: iamportMethod({
    method: 'DELETE',
    command: null,
    urlParam: 'imp_uid'
  }),
});
