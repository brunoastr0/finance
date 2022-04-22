const Sequelize = require('sequelize');
const { modelName } = require('../../wallet');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

module.exports = connection;