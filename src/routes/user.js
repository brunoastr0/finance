const express = require('express')
const balanceController = require('../controller/BalanceController')
const transactionController = require('../controller/TransactionController')
const authMiddleware = require('../middleware/auth')
const User = require('../models/UserSchema')
const user = express.Router()

/**User */

user.get('/api/me', authMiddleware, (req, res, next) => 
    balanceController.userBalance(req, res, next, req.user.user_id)
)

user.post('/api/transaction', authMiddleware, (req, res, next)=>
    transactionController.registerTransactions(req, res, next, req.user.user_id)
)

user.get('/api/transaction', authMiddleware, (req, res, next)=>
    transactionController.findUserTransaction(req, res, next, req.user.user_id)
)






module.exports = user