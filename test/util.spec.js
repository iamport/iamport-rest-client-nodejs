
'use strict';

var util = require('../lib/util')
,   expect = require('chai').expect;

describe('protoExtend', function() {
  it('Provides an extension mechanism', function() {
    function A() {}
    A.extend = util.protoExtend;
    var B = A.extend({
      constructor: function() {
        this.called = true;
      },
    });
    expect(new B()).to.be.an.instanceof(A);
    expect(new B()).to.be.an.instanceof(B);
    expect(new B().called).to.equal(true);
    expect(B.extend === util.protoExtend).to.equal(true);
  });
});
