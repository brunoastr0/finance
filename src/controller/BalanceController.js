const UserBalance = require('../models/UserBalance')
const { v4: uuid } = require("uuid");
const ApiError = require('../error/ApiError')


module.exports = {
    async userBalance (req, res, next, userId) {
            try {
                if(userId === undefined){
                    next(ApiError.badRequest('userId missing'))
                    return;
                }
                const balance = await UserBalance.findOne({where:{userId: userId}})
                res.json(balance)
            } catch (error) {
                next(error)

            }
        },

    async create(balancejson) {



        try {
            const { amount, userId } = balancejson

            const balanceExist = await UserBalance.findOne({ where: { userId: userId } })

            if (balanceExist) {
                return ApiError.conflict(`Balance table already exists`)
            }

            balance_vars = {
                id: uuid(),
                balance_amount: amount,
                userId: userId
            }


            const balance = await UserBalance.create(balance_vars);
            return balance


        } catch (error) {
            console.log(error)
        }


    }
}