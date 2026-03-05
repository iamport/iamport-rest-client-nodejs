
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('paymentwall.sendDelivery', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.paymentwall.sendDelivery()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when merchant_uid is missing', function(done){
    iamport.paymentwall.sendDelivery({imp_uid: 'test_imp_uid'})
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });
});
