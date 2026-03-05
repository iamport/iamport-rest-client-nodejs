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

  path: 'partners',

  /** method 생성
   * 파트너 정산 영수증을 발행합니다.
   * @see {@link https://api.iamport.kr/#!/partners/issuePartnerReceipt}
   *
   * @returns {promise} json 영수증 정보
   * @public
   */
  issueReceipt: iamportMethod({
    method: 'POST',
    command: 'receipts',
    urlParam: 'imp_uid',
    require: ['data']
  })

});
