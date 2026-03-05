
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('kcpQuick.deleteMember', function(){
  it('Should return error when member_id is missing', function(done){
    iamport.kcpQuick.deleteMember()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when site_code is missing', function(done){
    iamport.kcpQuick.deleteMember({member_id: 'test_member'})
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

describe('kcpQuick.payMoney', function(){
  it('Should return error when member_id is missing', function(done){
    iamport.kcpQuick.payMoney()
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
