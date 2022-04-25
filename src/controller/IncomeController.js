const UserIncome = require('../models/UserIncome')

module.exports = {
    async index(req, res) {
        
        const userIncome = await UserIncome.findAll({})
        return res.json(userIncome)


    },
    async store(req, res) {
        const {income_source, income_amount, income_date} = req.body;

        const income = await UserIncome.create({income_source, income_amount, income_date})
        return res.json(income)
    }
}