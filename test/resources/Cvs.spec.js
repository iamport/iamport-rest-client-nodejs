
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('cvs.create', function(){
  it('Should return error when channel_key is missing', function(done){
    iamport.cvs.create()
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
    iamport.cvs.create({channel_key: 'test_key'})
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

describe('cvs.delete', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.cvs.delete()
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
