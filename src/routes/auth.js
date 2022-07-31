const express = require('express')
const BalanceController = require('../controller/BalanceController')
const authController = require('../controller/AuthController')
const User = require('../models/UserSchema')
auth = express.Router()
/**User */
auth.post('/api/register', authController.register)
auth.post('/api/login', authController.login)





module.exports = auth