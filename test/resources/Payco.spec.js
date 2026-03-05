
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('payco.updateOrderStatus', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.payco.updateOrderStatus()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when status is missing', function(done){
    iamport.payco.updateOrderStatus({imp_uid: 'test_imp_uid'})
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
