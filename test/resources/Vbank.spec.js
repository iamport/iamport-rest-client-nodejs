
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('vbank.create', function(){
  it('Should return error when merchant_uid is missing', function(done){
    iamport.vbank.create()
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

describe('vbank.getHolder', function(){
  it('Should return error when bank_code is missing', function(done){
    iamport.vbank.getHolder()
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

describe('vbank.update', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.vbank.update()
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

describe('vbank.delete', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.vbank.delete()
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
