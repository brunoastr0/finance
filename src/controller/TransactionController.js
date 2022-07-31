const ApiError = require('../middleware/error/ApiError');
const UserBalance = require('../models/UserBalance');
const User = require('../models/UserSchema');
const Transaction = require('../models/UserTransactions');
const { v4: uuid } = require("uuid");
const { Op } = require('sequelize')


module.exports = {


    async registerTransactions(req, res, next, userId) {
        try {
            const { type, amount } = req.body;
            console.log(userId)
            const userExists = await User.findOne({ where: { id: userId } })
            if (!userExists) {
                next(ApiError.notFound(`user not found`))
            }

            const oldBalance = await UserBalance.findOne({ where: { userId: userId } })
            if (!oldBalance) {
                next(ApiError.internal(`user balance does not exists`))
                return;

            }

            var balance = 0
            if (type === 'INCOME') {
                balance = oldBalance.balance_amount + amount
            } else if (type === 'OUTCOME') {
                if (oldBalance.balance_amount < amount) {
                    next(ApiError.unauthorizedRequest(`amount reamining not enough`))
                    return;
                }

                balance = oldBalance.balance_amount - amount


            }


            const transactionJSON = {
                id: uuid(),
                userId: userId,
                transactions_type: type,
                amount: amount,
                balance: balance
            }



            const transaction = await Transaction.create(transactionJSON)

            res.status(201).json(transaction)


        } catch (error) {
            next(error)

        }



    },

    async findUserTransaction(req, res, next, userId) {
        try {

            const transactions = await Transaction.findAll({ where: { userId: userId } })
            if (!transactions) {
                next(ApiError.notFound(`User transacttions not found`))
                return;
            }

            res.status(200).json(transactions)

        } catch (error) {
            next(error)
        }
    },


    async findUserTransactionByDate(req, res, next, userId) {
        try {

            const { start_date, end_date } = req.body

            const transactions = await Transaction.findAll({
                where: {
                    userId: userId,
                    created_at: {
                        [Op.between]: [require('moment')(start_date).format('YYYY-MM-DD'), 
                        require('moment')(end_date).format('YYYY-MM-DD')] //12h
                    }
                }
            })
            if (!transactions) {
                next(ApiError.notFound(`User transacttions not found`))
                return;
            }

            res.status(200).json(transactions)

        } catch (error) {
            next(error)
        }
    }
}