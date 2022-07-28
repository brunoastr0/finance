const UserBalance = require('../models/UserBalance')
const { v4: uuid } = require("uuid");


module.exports = {
    async index(req, res) {

        const balance = await UserBalance.findAll({})
        return res.json(balance)

    },

    async create(balancejson) {



        try {
            const { amount, userId } = balancejson

            balance_vars = {
                id: uuid(),
                balance_amount: amount,
                userId: userId,
               
            }
            console.log(balance_vars)

            const balance = await UserBalance.create(balance_vars);
            return balance


        } catch (error) {
            console.log(error)
        }


    }
}