
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('tier.get', function(){
  it('Should return error when tier_code is missing', function(done){
    iamport.tier.get()
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
