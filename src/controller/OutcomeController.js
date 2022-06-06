const UserOutcome = require('../models/UserOutcome')

module.exports = {
    async index(req, res) {
        
        const userOutcome = await UserOutcome.findAll({})
        return res.json(userOutcome)

    },
    async store(req, res) {
        const {outcome_description, outcome_amount, outcome_date} = req.body;
        const outcome = await UserOutcome.create({outcome_description, outcome_amount, outcome_date})
        return res.json(outcome)
    }
}