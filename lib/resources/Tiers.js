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

  path: 'tiers',

  /** method 생성
   * 하위 상점 정보를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/tiers/getTier}
   *
   * @returns {promise} json 하위 상점 정보
   * @public
   */
  get: iamportMethod({
    method: 'GET',
    command: null,
    urlParam: 'tier_code'
  })

});
