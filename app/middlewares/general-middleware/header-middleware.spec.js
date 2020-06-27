/* eslint-disable global-require */
const mockery = require('mockery');

describe('header-middleware', () => {
  function getReq() {
    return {
      locals: {},
      headers: {
        'x-country': 'CL',
        'x-channel': 'Web',
        'x-commerce': 'Market'
      }
    };
  }
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

  it('Should trigger sendWrongHeader function if not all headers are present', (done) => {
    const mockCommonResponse = {
      sendWrongHeaders: () => {
        done();
      }
    };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const headerMiddleware = require('./header-middleware');
    const req = getReq();
    delete req.headers['x-country'];
    headerMiddleware(req, {});
  });

  it('Should trigger sendWrongHeader function if headers are present with wrong values', (done) => {
    const mockCommonResponse = {
      sendWrongHeaders: () => {
        done();
      } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const headerMiddleware = require('./header-middleware');
    const req = getReq();
    req.headers['x-channel'] = 'Wib';
    headerMiddleware(req, {});
  });

  it('Should trigger next if all headers are ok', (done) => {
    const headerMiddleware = require('./header-middleware');
    headerMiddleware(getReq(), {}, done);
  });
});
