/* eslint-disable no-param-reassign, no-plusplus */
const mongoInvoker = require('../common/common-mongo-invoker');
const Logger = require('../loggers/logger');
const config = require('../config/index');

function searchProductController(req) {
  const logger = new Logger('SEARCH-PRODUCT-CONTROLLER', req);

  logger.info(`Will find product for ${req.query.search}`);
  const search = req.query.search;
  const query = {
    $or: [{
      id: {
        $eq: parseInt(req.query.search, 10) || undefined
      }
    }]
  };

  if (search.length >= 3) {
    const queryBrand = {
      brand: {
        $regex: req.query.search,
        $options: 'i'
      }
    };
    const queryDescription = {
      description: {
        $regex: req.query.search,
        $options: 'i'
      }
    };
    query.$or.push(queryBrand, queryDescription);
  }

  logger.info(`Search on: ${config.collection}, query: ${JSON.stringify(query)}`);
  return mongoInvoker.realizarBusqueda(query);
}

module.exports = searchProductController;
