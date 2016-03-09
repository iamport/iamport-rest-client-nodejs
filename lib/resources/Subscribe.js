
'use strict';

var resource = require('../resource'),
    iamportMethod = resource.iamportMethod;

module.exports = resource.extend({
  
  path: 'subscribe',

  onetime: iamportMethod({ 
    method: 'POST',
    commend: 'onetime',
    urlParam: null
  }),

  again: iamportMethod({ 
    method: 'POST',
    commend: 'again',
    urlParam: null
  }),

  schedule: iamportMethod({ 
    method: 'POST',
    commend: 'schedule',
    urlParam: null
  }),

  unschedule: iamportMethod({ 
    method: 'POST',
    commend: 'unschedule',
    urlParam: null
  }),

  getCustomers: iamportMethod({
    method: 'GET',
    commend: 'customers',
    urlParam: 'customer_uid'
  }),

  createCustomers: iamportMethod({
    method: 'POST',
    commend: 'customers',
    urlParam: 'customer_uid'
  }),

  deleteCustomers: iamportMethod({
    method: 'DELETE',
    commend: 'customers',
    urlParam: 'customer_uid'
  })

});
