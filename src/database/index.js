const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const UserIncome = require('../models/UserIncome');

const connection = new Sequelize(dbConfig);
UserIncome.init(connection);
module.exports = connection;