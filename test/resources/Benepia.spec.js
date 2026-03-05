
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('benepia.getPoint', function(){
  it('Should return error when benepia_user is missing', function(done){
    iamport.benepia.getPoint()
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

describe('benepia.payment', function(){
  it('Should return error when benepia_user is missing', function(done){
    iamport.benepia.payment()
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
    iamport.benepia.payment({
      benepia_user: 'test_user',
      benepia_password: 'test_password',
      channel_key: 'test_key'
    })
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
