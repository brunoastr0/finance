
const { Model, DataTypes } = require("sequelize")
const userBalanceController = require('../controller/BalanceController')

class User extends Model {
    static init(sequelize) {
        super.init({
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, { sequelize, tableName: 'user' ,
    hooks: {
        afterCreate: async (user, options)=>{
            const balance = {
                amount: 0,
                userId:user.id
            }
            const balancePromise = await userBalanceController.create(balance)

          
        }
    }})
    }
}

module.exports = User