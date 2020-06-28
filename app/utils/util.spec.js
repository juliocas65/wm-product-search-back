/* eslint-disable global-require */
const chai = require('chai');
const util = require('./util');

const expect = chai.expect;

describe('util', () => {
  describe('palindrome ::', () => {
    it('returns true when expression is palindrome', () => {
      const expresion = 'ele';
      const result = util.palindrome(expresion);
      expect(result).to.be.equal(true);
    });
    it('returns false when expression is not palindrome', () => {
      const expresion = 'rtefgh';
      const result = util.palindrome(expresion);
      expect(result).to.be.equal(false);
    });
  });
});
