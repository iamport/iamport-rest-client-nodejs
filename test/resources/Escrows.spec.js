
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('escrows.create', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.escrows.create()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when sender is missing', function(done){
    iamport.escrows.create({imp_uid: 'test_imp_uid'})
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

describe('escrows.get', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.escrows.get()
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

describe('escrows.update', function(){
  it('Should return error when imp_uid is missing', function(done){
    iamport.escrows.update()
    .then(function(result){
      expect(result).to.be.empty;
      done();
    })
    .catch(function(error){
      expect(error.toString()).to.contain('Param missing');
      done();
    });
  });

  it('Should return error when sender is missing', function(done){
    iamport.escrows.update({imp_uid: 'test_imp_uid'})
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
