/* eslint-disable no-param-reassign */
const Logger = require('../loggers/logger');
const mongoClient = require('mongodb').MongoClient;
const config = require('../config/index');

const moduleName = 'MONGO-INVOKER';
const mongoUrl = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/admin`;

function obtenerCollection(logger) {
  return new Promise((fullfil, reject) => {
    if (!process.env.MONGO_USER || !process.env.MONGO_PASS || !process.env.MONGO_HOST || !process.env.MONGO_PORT) {
      return reject(new Error('Mongo DB credentials are required.'));
    }
    logger.info(`Conectando a Mongo database promotions en host ${process.env.MONGO_HOST} para obtener coleccion ${config.collection}`);
    function connectHandler(errorConnect, db) {
      if (errorConnect) {
        return reject(errorConnect);
      }
      return fullfil(db.collection(config.collection));
    }
    return mongoClient.connect(mongoUrl, connectHandler);
  });
}

function realizarBusqueda(query) {
  const logger = new Logger(moduleName);
  return new Promise((fullfil, reject) => {
    return obtenerCollection(logger)
    .then((collection) => {
      return fullfil(collection.find(query, { timeout: false }));
    })
    .catch(reject);
  });
}

module.exports = {
  obtenerCollection,
  realizarBusqueda
};
