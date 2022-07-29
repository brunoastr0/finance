const express = require('express')
const balanceController = require('../controller/BalanceController')
const authMiddleware = require('../middleware/auth')
const User = require('../models/UserSchema')
const user = express.Router()

/**User */

user.get('/api/me', authMiddleware, (req, res, next) => 
    balanceController.userBalance(req, res, next, req.user.user_id)
)






module.exports = user