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

  path: 'paymentwall',

  /** method 생성
   * Paymentwall 배송정보를 전달합니다.
   * @see {@link https://api.iamport.kr/#!/paymentwall/sendPaymentwallDelivery}
   *
   * @returns {promise} json 배송 정보
   * @public
   */
  sendDelivery: iamportMethod({
    method: 'POST',
    command: 'delivery',
    urlParam: null,
    require: ['imp_uid', 'merchant_uid', 'type', 'status', 'estimated_delivery_datetime', 'estimated_update_datetime', 'refundable', 'shipping_address_email']
  })

});
