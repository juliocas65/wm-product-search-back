const request = require('request');
const assert = require('cucumber-assert');

module.exports = function () {
  this.Given(/^I have service up and running$/, () => {
    process.env.PORT = 3001;
    require('../../bin/www');
  });
  let globalResponse;
  this.When(/^I go to "([^"]*)"$/, (serviceUrl, callback) => {
    request.get(serviceUrl, (errorRequest, requestResponse, responseBody) => {
      if (errorRequest) {
        return callback(errorRequest);
      }
      return callback(null, globalResponse = responseBody);
    });
  });
  this.Then(/^I can see "([^"]*)"$/, (serviceResponse, callback) => {
    const message = `Expected globalResponse to be equal to ${serviceResponse}`;
    assert.equal(globalResponse, serviceResponse, message).then(callback);
  });
};
