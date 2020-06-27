const config = require('../config');
const fs = require('fs');
const os = require('os');
const winston = require('winston');
const _ = require('../common/common-lodash');
require('winston-daily-rotate-file');

const logFolder = process.env.LOG_FOLDER || '/var/log/pm2';
const hostName = os.hostname();
const serviceName = config.apiName;
const environment = process.env.NODE_ENV || 'local';

let winstonInfo;
let winstonError;
function formatter(options) {
  return `${winston.config.colorize(options.level)} ${options.meta.message}`;
}

function createWinstonLogger(levelIn) {
  const transports = [new winston.transports.Console({ formatter })];
  if (fs.existsSync(logFolder)) {
    transports.push(new winston.transports.DailyRotateFile({
      level: levelIn,
      filename: `${logFolder}/${hostName}-${config.apiName}-${levelIn}-`,
      datePattern: 'yyyyMMdd.log',
      handleExceptions: false,
      maxsize: 5242880,
      maxFiles: 5
    }));
  }
  return new winston.Logger({ transports });
}

function Logger(moduleNameIn, reqOrRes) {
  const moduleName = moduleNameIn;
  const sessionId = _.get(reqOrRes, 'locals.sessionId');
  const requestId = _.get(reqOrRes, 'locals.requestId');
  const country = _.get(reqOrRes, 'locals.country');
  if (!winstonInfo) { winstonInfo = createWinstonLogger('info'); }
  if (!winstonError) { winstonError = createWinstonLogger('error'); }
  this.info = message => winstonInfo.info({ country, serviceName, environment, sessionId, requestId, moduleName, message });
  this.error = message => winstonError.error({ country, serviceName, environment, sessionId, requestId, moduleName, message });
}
module.exports = Logger;
