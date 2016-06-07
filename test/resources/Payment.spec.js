
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('payment.getByImpUid', function() {
  it('Should return error when imp_uid is missing', function(done) {
    iamport.payment.getByImpUid()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should fetch payment information', function(done){
    iamport.payment.getByImpUid({
      imp_uid: 'imp_448280090638'
    })
    .then(function(result){
      expect(result).to.be.not.empty;
      done();
    })
    .catch(function(error){
      done(error);
    });
  });
});

describe('payment.getByMerchant', function() {
  it('Should return error when merchant_uid is missing', function(done){
    iamport.payment.getByMerchant()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should fetch payment information by merchant_uid', function(done){
    iamport.payment.getByMerchant({
      merchant_uid: 'merchant_1448280088556'
    })
    .then(function(result){
      expect(result).to.be.not.empty;
      done();
    })
    .catch(function(error){
      done(error);
    });
  });
});

describe('payment.getByStatus', function() {
  it('Should return error when payment_status is missing', function(done){
    iamport.payment.getByStatus()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should fetch payment information by status', function(done){
    iamport.payment.getByStatus({
      payment_status: 'all'
    })
    .then(function(result){
      expect(result).to.be.not.empty;
      done();
    })
    .catch(function(error){
      done(error);
    });
  });
});
