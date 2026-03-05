
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('partner.issueReceipt', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.partner.issueReceipt()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when data is missing', function(done){
    iamport.partner.issueReceipt({imp_uid: 'test_imp_uid'})
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
