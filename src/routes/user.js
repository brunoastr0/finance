const express = require('express')
const BalanceController = require('../controller/BalanceController')
const authMiddleware = require('../middleware/auth')
const User = require('../models/UserSchema')
user = express.Router()

/**User */

user.get('/api/me', authMiddleware, async (req, res) => {

    const user = await User.findOne({ where: { email: req.user.email } })
    res.json(req.user)
})






module.exports = user