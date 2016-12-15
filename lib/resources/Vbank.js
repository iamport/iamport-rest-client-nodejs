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
  })

});
