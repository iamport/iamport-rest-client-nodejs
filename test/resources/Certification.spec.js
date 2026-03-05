
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('certification.get', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.certification.get()
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

describe('certification.delete', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.certification.delete()
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

describe('certification.otpRequest', function(){
  it('Should be a function', function(){
    expect(iamport.certification.otpRequest).to.be.a('function');
  });
});

describe('certification.otpConfirm', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.certification.otpConfirm()
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
