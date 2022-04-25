const express = require('express')
const IncomeController = require('../controller/IncomeController')
routes = express.Router()

routes.get('/api/income', IncomeController.index)
routes.post('/api/income', IncomeController.store)



module.exports = routes