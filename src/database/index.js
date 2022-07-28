const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const UserBalance = require('../models/UserBalance')
const User = require('../models/UserSchema')

const connection = new Sequelize(dbConfig);


User.init(connection);
UserBalance.init(connection);


module.exports = connection;