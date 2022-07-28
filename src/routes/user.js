const express = require('express')
// const IncomeController = require('../controller/IncomeController')
// const OutcomeController = require('../controller/OutcomeController')
const BalanceController = require('../controller/BalanceController')
const userController = require('../controller/UserController')
const auth = require('../middleware/auth')
const User = require('../models/UserSchema')
routes = express.Router()
/**User */
routes.post('/api/register', userController.register)
routes.post('/api/login', userController.login)

routes.get('/api/home/:id', auth, async (req, res) => {
    const user = await User.findOne({ where: { email: req.user.email } })
    res.json(user)
})

/**Balance */
routes.get('/api/balance', BalanceController.index)





module.exports = routes