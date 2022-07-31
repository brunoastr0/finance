const { Model, DataTypes } = require("sequelize");
const userBalanceController = require('../controller/BalanceController')
const UserBalance = require('../models/UserBalance');



class Transaction extends Model {
    static init(sequelize) {
        super.init(
            {
                userId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "user",
                        key: "id"
                    }
                },
                transactions_type: DataTypes.ENUM("INCOME, OUTCOME"),
                amount: DataTypes.INTEGER,
                balance: DataTypes.INTEGER

            },
            {
                sequelize,
                tableName: "user_transactions",
                hooks: {
                    afterCreate: async (transaction, options) => {
                        const { userId, amount, balance, transactions_type } = transaction
                        const oldBalance = await UserBalance.findOne({ where: { userId: userId } })
                        if (!oldBalance) {
                            next(ApiError.internal(`user balance does not exists`))
                        }
                        const balanceAfter = transactions_type === 'INCOME'? oldBalance.balance_amount + amount  : oldBalance.balance_amount - amount

                        const balanceJSON = {
                            userId: userId,
                            balance_amount: balanceAfter,

                            balance_remain: balanceAfter
                        }
                        await UserBalance.update(balanceJSON, { where: { userId: userId } })


                    }
                }
            }
        )
    }
}

module.exports = Transaction