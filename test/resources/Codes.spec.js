
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('bank.getAll', function(){
  it('Should be a function', function(){
    expect(iamport.bank.getAll).to.be.a('function');
  });
});

describe('bank.getByCode', function(){
  it('Should return error when bank_standard_code is missing', function(done){
    iamport.bank.getByCode()
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

describe('card.getAll', function(){
  it('Should be a function', function(){
    expect(iamport.card.getAll).to.be.a('function');
  });
});

describe('card.getByCode', function(){
  it('Should return error when card_standard_code is missing', function(done){
    iamport.card.getByCode()
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
