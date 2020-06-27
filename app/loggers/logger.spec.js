/* eslint-disable global-require */
const mockery = require('mockery');

describe('logger', () => {
  function getFsMock(out) {
    return { existsSync() { return out; } };
  }
  function Console(objectIn) { objectIn.formatter({ level: {}, meta: {} }); }
  function DailyRotateFile() {}
  function LoggerMock() {
    this.info = () => {};
    this.error = () => {};
  }
  const winstonMock = {
    Logger: LoggerMock,
    transports: { Console, DailyRotateFile },
    config: { colorize() {} }
  };
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    mockery.registerMock('winston', winstonMock);
    mockery.registerMock('winston-daily-rotate-file', {});
  });
  afterEach(() => {
    mockery.disable();
    mockery.deregisterAll();
  });
  it('should create logger without file', () => {
    mockery.registerMock('fs', getFsMock(false));
    const Logger = require('./logger');
    const logger = new Logger('LOGGER');
    logger.info('ble');
  });
  it('should create logger with file', () => {
    mockery.registerMock('fs', getFsMock(true));
    const Logger = require('./logger');
    const logger = new Logger('LOGGER');
    logger.error('bla');
  });
});
