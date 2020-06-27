const { regexNumber } = require('../config');

function validateNumber(number) {
  const numberAsInt = parseInt(number, 10);
  return typeof (number) === 'string' && regexNumber.test(number) && numberAsInt > 0;
}
module.exports = validateNumber;
