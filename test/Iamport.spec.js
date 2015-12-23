import chai from 'chai';

import Iamport from '../src/Iamport';

chai.should();

describe('Iamport', () =>  {
  describe('constructor', () => {
    it('constructs an object with impKey and impSecret', () => {
      const iamport = new Iamport({ impKey: 'key', impSecret: 'secret' });

      iamport.impKey.should.equal('key');
      iamport.impSecret.should.equal('secret');
    });
  });
});
