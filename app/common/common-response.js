const Logger = require('../loggers/logger');

function sendResponse(res, status, data, stackIn) {
  const logger = new Logger('COMMON-RESPONSE', res);
  if (stackIn) { data.stack = stackIn; } // eslint-disable-line no-param-reassign
  logger.info(`Returning ${JSON.stringify(data)}`);
  return res.status(status).send(data);
}

function sendWrongHeaders(res, stack) {
  const data = { code: 'HEADERS_ERROR', message: 'Wrong headers' };
  return sendResponse(res, 500, data, stack);
}

function sendWrongBody(res, stack) {
  const data = { code: 'BODY_ERROR', message: 'Wrong body' };
  return sendResponse(res, 500, data, stack);
}

function sendInternalError(res, stack) {
  const data = { code: 'INTERNAL_ERROR', message: 'Internal server error' };
  return sendResponse(res, 500, data, stack);
}

function sendResponseOk(res, data) {
  return sendResponse(res, 200, data);
}

module.exports = {
  sendWrongHeaders,
  sendWrongBody,
  sendInternalError,
  sendResponseOk
};
