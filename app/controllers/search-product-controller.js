/* eslint-disable no-param-reassign, no-plusplus */
const mongoInvoker = require('../common/common-mongo-invoker');
const Logger = require('../loggers/logger');
const config = require('../config/index');

function searchProductController(req) {
  if (!req) {
    throw new Error('request is not defined');
  }

  const logger = new Logger('SEARCH-PRODUCT-CONTROLLER', req);

  logger.info(`Will find product for ${req.query.search}`);
  const query = {
    id: {
      $eq: parseInt(req.query.search, 10),
    }
  };

  logger.info(`Busqueda en: ${config.collection}, query: ${JSON.stringify(query)}`);
  return mongoInvoker.realizarBusqueda(query);
}

module.exports = searchProductController;
