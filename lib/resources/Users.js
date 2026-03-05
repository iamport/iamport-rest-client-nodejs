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

  path: 'users',

  /** method 생성
   * PG사 설정 정보를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/users/getPgSettings}
   *
   * @returns {promise} json PG 설정 정보
   * @public
   */
  getPg: iamportMethod({
    method: 'GET',
    command: 'pg',
    urlParam: null
  })

});
