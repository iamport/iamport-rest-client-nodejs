
'use strict';

var resource = require('../resource'),
    iamportMethod = resource.iamportMethod;

/**
 * Module exports.
 * @public
 */
module.exports = resource.extend({
  
  path: 'subscribe',

  onetime: iamportMethod({ 
    method: 'POST',
    commend: 'onetime',
    urlParam: null,
    require: ['merchant_uid','amount','card_number','expiry','birth','pwd_2digit']
  }),

  again: iamportMethod({ 
    method: 'POST',
    commend: 'again',
    urlParam: null,
    require: ['customer_uid','merchant_uid','amount']
  }),

  schedule: iamportMethod({ 
    method: 'POST',
    commend: 'schedule',
    urlParam: null,
    require: ['customer_uid','card_number','expiry','birth','pwd_2digit','schedules']
  }),

  unschedule: iamportMethod({ 
    method: 'POST',
    commend: 'unschedule',
    urlParam: null,
    require: ['customer_uid']
  }),

  getCustomers: iamportMethod({
    method: 'GET',
    commend: 'customers',
    urlParam: 'customer_uid'
  }),

  createCustomers: iamportMethod({
    method: 'POST',
    commend: 'customers',
    urlParam: 'customer_uid',
    require: ['card_number','expiry','birth','pwd_2digit']
  }),

  deleteCustomers: iamportMethod({
    method: 'DELETE',
    commend: 'customers',
    urlParam: 'customer_uid'
  })

});
