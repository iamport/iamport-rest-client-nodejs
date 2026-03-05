
'use strict';

var iamport = new require('../../lib/iamport')()
,   expect = require('chai').expect;

describe('user.getPg', function(){
  it('Should be a function', function(){
    expect(iamport.user.getPg).to.be.a('function');
  });
});
