const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const UserIncome = require('../models/UserIncome');
const UserOutcome = require('../models/UserOutcome')

const connection = new Sequelize(dbConfig);

UserIncome.init(connection);
UserOutcome.init(connection);

module.exports = connection;