/* eslint-disable global-require */
const mockery = require('mockery');
const getRequest = require('../../../features/crear/getRequest');

describe('crear-personal-data-middleware', () => {
  beforeEach(() => {
    mockery.enable({ warnOnReplace: false, warnOnUnregistered: false, useCleanCache: true });
  });
  afterEach(() => {
    mockery.disable();
    mockery.deregisterAll();
  });

  it('Should trigger next if all parameters are ok', (done) => {
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest(), locals: {} };
    crearMiddleware(req, {}, done);
  });

  it('Should trigger next if all parameters are ok for single name', (done) => {
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest(), locals: {} };
    req.body.names = 'Pepe';
    crearMiddleware(req, {}, done);
  });

  it('Should trigger next if all parameters are ok for citycode 11001 and regioncode 25000', (done) => {
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest(), locals: {} };
    req.body.cityCode = '11001';
    req.body.regionCode = '25000';
    crearMiddleware(req, {}, done);
  });

  it('Should trigger next if all parameters are ok with maternalSurname empty', (done) => {
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest(), locals: {} };
    req.body.maternalSurname = '';
    crearMiddleware(req, {}, done);
  });

  it('Should trigger next if all parameters are ok for regionCode USA', (done) => {
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest(), locals: {} };
    req.body.regionCode = 'USA';
    req.body.cityCode = '99901';
    crearMiddleware(req, {}, done);
  });

  it('Should trigger sendWrongBody function if names have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    delete req.body.names;
    crearMiddleware(req, {});
  });

  it('Should trigger sendWrongBody function if paternalSurname have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    req.body.paternalSurname = 'C3lis';
    crearMiddleware(req, {});
  });

  it('Should trigger sendWrongBody function if maternalSurname have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    req.body.maternalSurname = 'R3strepo';
    crearMiddleware(req, {});
  });

  it('Should trigger sendWrongBody function if birthday have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    req.body.birthday = '19/8412/30';
    crearMiddleware(req, {});
  });

  it('Should trigger sendWrongBody function if email have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    req.body.email = 'quezarpacom';
    crearMiddleware(req, {});
  });

  it('Should trigger sendWrongBody function if phone have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    req.body.phone = '312a456789';
    crearMiddleware(req, {});
  });

  it('Should trigger sendWrongBody function if regionCode have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    req.body.regionCode = 5001;
    crearMiddleware(req, {});
  });

  it('Should trigger sendWrongBody function if cityCode have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    req.body.cityCode = 5000;
    crearMiddleware(req, {});
  });

  it('Should trigger sendWrongBody function if birthPlace have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    req.body.birthPlace = 11201;
    crearMiddleware(req, {});
  });

  it('Should trigger sendWrongBody function if birthDep have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    req.body.birthDep = 4000;
    crearMiddleware(req, {});
  });

  it('Should trigger sendWrongBody function if civilStatus have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    req.body.civilStatus = 11201;
    crearMiddleware(req, {});
  });

  it('Should trigger sendWrongBody function if nationality have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    req.body.nationality = 2;
    crearMiddleware(req, {});
  });

  it('Should trigger sendWrongBody function if gender have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    req.body.gender = 2;
    crearMiddleware(req, {});
  });

  it('Should trigger sendWrongBody function if address have a wrong value', (done) => {
    const mockCommonResponse = { sendWrongBody: () => { return done(); } };
    mockery.registerMock('../../common/common-response', mockCommonResponse);
    const crearMiddleware = require('./crear-personal-data-middleware');
    const req = { body: getRequest() };
    req.body.address = '';
    crearMiddleware(req, {});
  });
});
