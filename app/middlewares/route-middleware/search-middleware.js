/* eslint-disable no-param-reassign, no-plusplus */
const searchProductController = require(`../../controllers/search-product-controller`); // eslint-disable-line
const Logger = require('../../loggers/logger');
const commonResponse = require('../../common/common-response');
const _ = require('../../common/common-lodash');

module.exports = (req, res) => {
  const logger = new Logger('SEARCH-MIDDLEWARE', req);
  function errorHandler(error) {
    logger.error(error.stack);
    return commonResponse.sendWrongBody(res, error.stack);
  }

  const search = _.get(req, 'query.search');
  if (search === undefined) {
    return errorHandler(new Error(`search (${search}) must not be undefined`));
  }

  function palindrome(str) {
    str = str.toLowerCase();
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  let salida = {};
  const data = [];

  function queryHandler(resultQuery) {
    function getNext() {
      return resultQuery.nextObject(processOne); // eslint-disable-line no-use-before-define
    }
    function proccessDocument(document) {
      return new Promise((fullfil) => {
        if (palindrome(req.query.search)) {
          const price = _.get(document, 'price');
          document.newPrice = Math.round(price / 2);
        }
        data.push(document);
        return fullfil();
      });
    }
    function processOne(error, document) {
      if (error) {
        return getNext();
      } else if (document === null) {
        if (data.length > 0) {
          salida = {
            code: 'SUCCESS',
            message: 'Products found',
            data
          };
        } else {
          salida = {
            code: 'NOT_FOUND',
            message: 'Products not found'
          };
        }
        return commonResponse.sendResponseOk(res, salida);
      }
      return proccessDocument(document).then(() => { return getNext(); });
    }
    return getNext();
  }

  return searchProductController(req)
  .then(queryHandler)
  .catch((error) => {
    salida = {
      code: 'ERROR',
      message: 'Error during search',
      error
    };
    return commonResponse.sendInternalError(res, salida);
  });
};
