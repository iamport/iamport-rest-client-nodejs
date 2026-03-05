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

  path: 'kcpquick',

  /** method 생성
   * KCP 퀵페이 회원을 삭제합니다.
   * @see {@link https://api.iamport.kr/#!/kcpquick/deleteKcpQuickMember}
   *
   * @returns {promise} json 회원 정보
   * @public
   */
  deleteMember: iamportMethod({
    method: 'DELETE',
    command: 'members',
    urlParam: 'member_id',
    require: ['site_code', 'partner_type', 'partner_subtype']
  }),

  /** method 생성
   * KCP 퀵페이 간편결제를 요청합니다.
   * @see {@link https://api.iamport.kr/#!/kcpquick/payKcpQuickMoney}
   *
   * @returns {promise} json 결제 정보
   * @public
   */
  payMoney: iamportMethod({
    method: 'POST',
    command: 'payment/money',
    urlParam: null,
    require: ['member_id', 'channel_key', 'merchant_uid', 'name', 'amount']
  })

});
