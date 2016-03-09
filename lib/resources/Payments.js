
'use strict';

var resource = require('../resource'),
    iamportMethod = resource.iamportMethod;

module.exports = resource.extend({
  
  path: 'payments',
  
  getByImpUid: iamportMethod({ 
    method: 'GET',
    commend: null ,
    urlParam: 'imp_uid'
  }),
  
  getByMerchant: iamportMethod({ 
    method: 'GET',
    command: 'find',
    urlParam: 'merchant_uid'
  }),
  
  getByStatus: iamportMethod({ 
    method: 'GET',
    command: 'status',
    urlParam: 'payment_status'
  }),
  
  cancel: iamportMethod({ 
    method: 'POST',
    command: 'cancel',
    urlParam: null
  })

});
