const config = require('../config');

const env = process.env.NODE_ENV || 'local';
function healthController(req, res) {
  return res.send(`${config.apiName} up and running on ${env}`);
}
module.exports = healthController;
