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

  path: 'benepia',

  /** method 생성
   * 베네피아 포인트(복지포인트)를 조회합니다.
   * @see {@link https://api.iamport.kr/#!/benepia/queryBenepiaPoint}
   *
   * @returns {promise} json 포인트 정보
   * @public
   */
  getPoint: iamportMethod({
    method: 'POST',
    command: 'point',
    urlParam: null,
    require: ['benepia_user', 'benepia_password', 'channel_key']
  }),

  /** method 생성
   * 베네피아 포인트(복지포인트) 결제를 요청합니다.
   * @see {@link https://api.iamport.kr/#!/benepia/payBenepiaPoint}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  payment: iamportMethod({
    method: 'POST',
    command: 'payment',
    urlParam: null,
    require: ['benepia_user', 'benepia_password', 'merchant_uid', 'amount', 'name', 'channel_key']
  })

});
