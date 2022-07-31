const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const UserBalance = require('../models/UserBalance')
const User = require('../models/UserSchema');
const Transaction = require('../models/UserTransactions');
const AccountAdministration = require('../models/UserAccountAdministration');

const connection = new Sequelize(dbConfig);


User.init(connection);
UserBalance.init(connection);
Transaction.init(connection);
AccountAdministration.init(connection);


module.exports = connection;
