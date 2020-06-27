/* eslint-disable global-require */
const chai = require('chai');
const mockery = require('mockery');

const expect = chai.expect;

describe('common-response', () => {
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
  describe('sendWrongHeader function', () => {
    it('Should return code HEADERS_ERROR and message Wrong headers', (done) => {
      const func = require('./common-response').sendWrongHeaders;
      const responseMock = {
        locals: {},
        status: (status) => {
          return {
            send: (data) => {
              expect(status).to.be.equal(500);
              expect(data.code).to.be.equal('HEADERS_ERROR');
              expect(data.message).to.be.equal('Wrong headers');
              done();
            }
          };
        }
      };
      func(responseMock);
    });
  });
  describe('sendWrongBody function', () => {
    it('Should return code BODY_ERROR and message Wrong body', (done) => {
      const func = require('./common-response').sendWrongBody;
      const responseMock = {
        locals: {},
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
      func(responseMock);
    });
  });
  describe('sendInternalError function', () => {
    it('Should return code INTERNAL_ERROR and message Internal server error', (done) => {
      const func = require('./common-response').sendInternalError;
      const responseMock = {
        locals: {},
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
      func(responseMock);
    });
  });
  describe('sendResponseOk function', () => {
    it('Should return status 200 with data given as argument', (done) => {
      const func = require('./common-response').sendResponseOk;
      const data = { code: 'CODE', message: 'message' };
      const responseMock = {
        locals: {},
        status: (status) => {
          return {
            send: (dataIn) => {
              expect(status).to.be.equal(200);
              expect(dataIn).to.deep.equal(data);
              done();
            }
          };
        }
      };
      func(responseMock, data);
    });
  });
});
