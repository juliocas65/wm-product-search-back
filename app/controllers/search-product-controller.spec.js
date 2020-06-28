/* eslint-disable no-undef, global-require, no-unused-vars */
const chai = require('chai');
const mockery = require('mockery');

const expect = chai.expect;

describe('searchProductController', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
  });
  afterEach(() => {
    mockery.disable();
    mockery.deregisterAll();
  });
  it('Should return error if request is undefined', (done) => {
    const searchProductController = require('./search-product-controller');
    try {
      searchProductController(undefined);
    } catch (error) {
      expect(error.message).to.be.equal('Cannot read property \'query\' of undefined');
      done();
    }
  });
  it('Should return error if request query undefined', (done) => {
    const searchProductController = require('./search-product-controller');
    try {
      searchProductController({ query: undefined });
    } catch (error) {
      expect(error.message).to.be.equal('Cannot read property \'search\' of undefined');
      done();
    }
  });
  it('Should return promise if search is number ok', (done) => {
    const searchProductController = require('./search-product-controller');
    const data = searchProductController({ query: { search: 181 } });
    expect(data).to.be.instanceOf(Promise);
    done();
  });
  it('Should return promise if search is string ok', (done) => {
    const searchProductController = require('./search-product-controller');
    const data = searchProductController({ query: { search: '!"' } });
    expect(data).to.be.instanceOf(Promise);
    done();
  });
});
