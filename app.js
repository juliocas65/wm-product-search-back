const express = require('express');
const bodyParser = require('body-parser');
const config = require('./app/config/index');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const swaggerDef = require('./swagger.json');
const healthController = require('./app/controllers/health-controller');
const solicitudRoute = require('./app/routes/solicitud-route');

const basePath = config.apiName;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// swagger configuration

swaggerDef.basePath = basePath;
const swaggerDocument = YAML.load('./swagger/products.yml');

app.use('/api-docs', swaggerUi.serve,
  swaggerUi.setup(swaggerDocument));

// health check MS
app.get(`/${basePath}/health`, healthController);

app.use(`/${basePath}`, solicitudRoute(undefined));

// handle  not found  uris
app.use((req, res) => {
  res.status(404).send('404: Page not Found');
});

// handle  any extra error
app.use((error, req, res) => {
  res.status(500).send('500: Internal Server Error');
});

module.exports = app;
