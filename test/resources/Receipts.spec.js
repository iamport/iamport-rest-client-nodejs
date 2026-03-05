
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('receipt.get', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.receipt.get()
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

describe('receipt.create', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.receipt.create()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when identifier is missing', function(done){
    iamport.receipt.create({imp_uid: 'test_imp_uid'})
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

describe('receipt.delete', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.receipt.delete()
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

describe('receipt.getExternal', function(){
  it('Should return error when merchant_uid is missing', function(done){
    iamport.receipt.getExternal()
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

describe('receipt.createExternal', function(){
  it('Should return error when merchant_uid is missing', function(done){
    iamport.receipt.createExternal()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when channel_key is missing', function(done){
    iamport.receipt.createExternal({merchant_uid: 'test_merchant'})
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

describe('receipt.deleteExternal', function(){
  it('Should return error when merchant_uid is missing', function(done){
    iamport.receipt.deleteExternal()
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
