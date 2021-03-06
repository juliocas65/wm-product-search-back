const express = require('express');
const allowCrossDomain = require('cors');
const headerMiddleware = require('../middlewares/general-middleware/header-middleware');
const searchMiddleware = require('../middlewares/route-middleware/search-middleware');

function productRoute() {
  const router = express.Router();
  router.use(allowCrossDomain({
    methods: ['GET', 'POST', 'HEAD', 'OPTIONS']
  }));

  router.get('/search/', [headerMiddleware, searchMiddleware]);
  return router;
}
module.exports = productRoute;
