const express = require('express')
const BalanceController = require('../controller/BalanceController')
const authController = require('../controller/AuthController')
const authMiddleware = require('../middleware/auth')
const User = require('../models/UserSchema')
auth = express.Router()
/**User */
auth.post('/api/register', authController.register)
auth.post('/api/login', authController.login)


/**Balance */
auth.get('/api/balance', BalanceController.index)





module.exports = auth