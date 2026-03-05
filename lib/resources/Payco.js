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

  path: 'payco',

  /** method 생성
   * PAYCO 주문 상태를 변경합니다.
   * @see {@link https://api.iamport.kr/#!/payco/updatePaycoOrderStatus}
   *
   * @returns {promise} json 주문 정보
   * @public
   */
  updateOrderStatus: iamportMethod({
    method: 'POST',
    command: 'orders/status',
    urlParam: 'imp_uid',
    require: ['status']
  })

});
