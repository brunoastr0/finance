const ApiError = require('../error/ApiError');
const UserBalance = require('../models/UserBalance');
const User = require('../models/UserSchema');
const Transaction = require('../models/UserTransactions');
const { v4: uuid } = require("uuid");


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

            }

            balance = type === 'INCOME' ? oldBalance.balance_amount + amount : oldBalance.balance_amount - amount
            console.log(balance)
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
            if(!transactions){
                next(ApiError.notFound(`User transacttions not found`))
                return;
            }

            res.status(200).json(transactions)

        } catch (error) {
            next(error)
        }
    }
}