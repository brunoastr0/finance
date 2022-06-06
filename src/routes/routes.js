const express = require('express')
const IncomeController = require('../controller/IncomeController')
const OutcomeController = require('../controller/OutcomeController')
routes = express.Router()

routes.get('/api/income', IncomeController.index)
routes.post('/api/income', IncomeController.store)

/**Outcome */
routes.get('/api/outcome', OutcomeController.index)
routes.post('/api/outcome', OutcomeController.store)





module.exports = routes