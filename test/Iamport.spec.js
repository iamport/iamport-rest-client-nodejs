import chai from 'chai';

import Iamport from '../src/Iamport';
import { TEST_IMP_KEY, TEST_IMP_SECRET } from '../src/constants';

chai.should();

describe('Iamport', () =>  {
  describe('constructor', () => {
    it('constructs an object with test impKey and impSecret', () => {
      const iamport = new Iamport();

      iamport.impKey.should.equal(TEST_IMP_KEY);
      iamport.impSecret.should.equal(TEST_IMP_SECRET);
    });

    it('constructs an object with given impKey and impSecret', () => {
      const iamport = new Iamport({ impKey: 'key', impSecret: 'secret' });

      iamport.impKey.should.equal('key');
      iamport.impSecret.should.equal('secret');
    });
  });
});
