const request = require('request');
const config = require('../../app/config');
const assert = require('cucumber-assert');

module.exports = function () {
  let globalResponse;
  function makeRequest(bodyIn, callback) {
    const options = {
      headers: {
        'x-country': 'CL',
        'x-channel': 'Web',
        'x-commerce': 'Market'
      },
      json: bodyIn
    };
    return request.get(config.obtenerHistoricoEndpoint, options, (errorPost, response, body) => {
      if (errorPost) {
        return callback(errorPost);
      }
      return callback(null, globalResponse = body);
    });
  }

  this.When(/^I post to obtener historico endpoint with data "([^"]*)"$/, (estado, callback) => {
    const body = { typeId: '1', numberId: '00000', estado };
    return makeRequest(body, callback);
  });

  this.Then(/^I can see error code "([^"]*)"$/, (code, callback) => {
    const message = `Expected globalResponse to be equal to ${code}`;
    assert.equal(globalResponse.code, code, message).then(callback).catch(callback);
  });
};
