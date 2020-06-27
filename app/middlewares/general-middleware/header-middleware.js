const Logger = require('../../loggers/logger');
const commonResponse = require('../../common/common-response');

function headerMiddleware(req, res, next) {
  const logger = new Logger('HEADER-MIDDLEWARE', req);
  const headerValues = { 'x-country': 'CL', 'x-channel': 'Web', 'x-commerce': 'Market' };
  try {
    Object.keys(headerValues).forEach((campo) => {
      if (!req.headers[campo]) {
        throw new Error(`${campo} is required`);
      }
      if (req.headers[campo] !== headerValues[campo]) {
        throw new Error(`${campo} is not ${headerValues[campo]}`);
      }
    });
  } catch (error) {
    logger.error(error.message);
    return commonResponse.sendWrongHeaders(res, error.stack);
  }
  return next();
}
module.exports = headerMiddleware;
