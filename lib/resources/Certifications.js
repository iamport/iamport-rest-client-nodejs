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

  path: 'certifications',

  /** method 생성
   * SMS본인인증 결과정보를 아임포트에서 완전히 삭제하고 싶을 때 요청합니다.
   * @see {@link https://api.iamport.kr/#!/certifications/deleteCertification}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  delete: iamportMethod({
    method: 'DELETE',
    command: null ,
    urlParam: 'imp_uid'
  }),


  /** method 생성
   * SMS본인인증된 결과를 조회할 때 사용합니다.
   *
   * @see {@link https://api.iamport.kr/#!/certifications/getCertification}
   *
   * @param {Object}
   * @returns {promise}
   * @public
   */
  get: iamportMethod({
    method: 'GET',
    command: null,
    urlParam: 'imp_uid'
  })

});
