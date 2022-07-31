const { Model, DataTypes } = require("sequelize");
const UserBalance = require('../models/UserBalance');


class AccountAdministration extends Model {
    static init(sequelize) {
        super.init(
            {
                category_name: DataTypes.STRING,
                balance: DataTypes.INTEGER,
                percentage: DataTypes.DOUBLE,
                userId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "user",
                        key: "id"
                    }
                }
            },
            {
                sequelize,
                tableName: "user_account_administration",
                hooks: {
                    afterCreate: async (acc, options) => {
                        const oldBalance = await UserBalance.findOne({ where: { userId: acc.userId } })

                        const balance = {
                            balance_remain: oldBalance.balance_amount*(1-acc.percentage)
                        }
                        await UserBalance.update(balance, { where: { userId: acc.userId } })

                    }



                }
            }
        )
    }
}

module.exports = AccountAdministration