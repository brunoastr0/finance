const ApiError = require('../error/ApiError');
const UserBalance = require('../models/UserBalance');
const User = require('../models/UserSchema');
const Transaction = require('../models/UserTransactions');

module.exports = {


    async registerTransactions(req, res, next) {
        try {
            const { userId, type, amount } = req.body;

            const userExists = await User.findOne({ where: { userId: userId } })
            if (!userExists) {
                next(ApiError.notFound(`user not found`))
            }

            const oldBalance = await User.findOne({ where: { userId: userId } })
            if (!oldBalance) {
                next(ApiError.internal(`user balance does not exists`))

            }

            balance = oldBalance.balance_amount + amount ? type === 'INCOME' : oldBalance.balance_amount - amount

            const transactionJSON = {
                userId: userId,
                transactions_type: type,
                amount: amount,
                balance: balance,
                createdAt: new Date(),
                updatedAt: new Date()

            }

            const transaction = await Transaction.create(transactionJSON)

            res.status(201).json(transaction)


        } catch (error) {
            next(error)

        }



    }
}