/* eslint-disable global-require */
const chai = require('chai');
const mockery = require('mockery');

const expect = chai.expect;

const documents = [
  { id: 1, brand: 'ele', description: 'ele', price: 188000 },
  {},
  { id: 232, brand: 'sdf', description: 'ert', price: 8000 },
  { id: 344, brand: 'rrt', description: 'wty', price: 94000 },
];

const resultQueryMock = {
  nextObject(callback) {
    if (this.index > 3) {
      return callback(undefined, null);
    } else if (this.index === 1) {
      this.index += 1;
      return callback(new Error('error next object'));
    }
    return callback(undefined, documents[this.index++]); // eslint-disable-line no-plusplus
  },
  index: 0,
};

function controllerMockInvoker() {
  function searchProductController() {
    return new Promise((resolve) => { resolve(resultQueryMock); });
  }
  return searchProductController();
}

describe('search-middleware', () => {
  beforeEach(() => {
    mockery.enable({ warnOnReplace: false, warnOnUnregistered: false, useCleanCache: true });
  });
  afterEach(() => {
    mockery.disable();
    mockery.deregisterAll();
  });

  it('should return BODY_ERROR when req is undefined', (done) => {
    const searchMiddleware = require('./search-middleware');

    const responseMock = {
      status: (status) => {
        return {
          send: (data) => {
            expect(status).to.be.equal(500);
            expect(data.code).to.be.equal('BODY_ERROR');
            expect(data.message).to.be.equal('Wrong body');
            done();
          }
        };
      }
    };
    const result = searchMiddleware({ query: undefined }, responseMock);
    expect(result).to.be.equal(undefined);
  });
  it('should return INTERNAL_ERROR when req is undefined', (done) => {
    mockery.registerMock('../../controllers/search-product-controller', controllerMockInvoker);
    const searchMiddleware = require('./search-middleware');
    const responseMock = {
      status: (status) => {
        return {
          send: (data) => {
            expect(status).to.be.equal(500);
            expect(data.code).to.be.equal('INTERNAL_ERROR');
            expect(data.message).to.be.equal('Internal server error');
            done();
          }
        };
      }
    };
    searchMiddleware({ query: { search: 181 } }, responseMock);
  });
  it('should return SUCCESS when object is found', (done) => {
    mockery.registerMock('../../controllers/search-product-controller', controllerMockInvoker);
    const searchMiddleware = require('./search-middleware');
    const responseMock = {
      status: (status) => {
        return {
          send: (data) => {
            expect(status).to.be.equal(200);
            expect(data.code).to.be.equal('SUCCESS');
            expect(data.message).to.be.equal('Products found');
            done();
          }
        };
      }
    };
    searchMiddleware({ query: { search: 'ele' } }, responseMock);
  });
});
