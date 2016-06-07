
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('subscribe.createCustomers', function(){
  it('create customer param check', function(done){
    iamport.subscribe.createCustomers()
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
