/* eslint-disable no-param-reassign,  */
const searchProductController = require(`../../controllers/search-product-controller`); // eslint-disable-line
const commonResponse = require('../../common/common-response');
const _ = require('../../common/common-lodash');
const util = require('../../utils/util');

module.exports = (req, res) => {
  function errorHandler(error) {
    return commonResponse.sendWrongBody(res, error.stack);
  }

  const search = _.get(req, 'query.search');
  if (search === undefined) {
    return errorHandler(new Error(`search (${search}) must not be undefined`));
  }

  let salida = {};
  const data = [];

  function queryHandler(resultQuery) {
    function getNext() {
      return resultQuery.nextObject(processOne); // eslint-disable-line no-use-before-define
    }
    function proccessDocument(document) {
      return new Promise((fullfil) => {
        if (util.palindrome(req.query.search)) {
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
