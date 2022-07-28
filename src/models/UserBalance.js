const {Model, DataTypes} = require("sequelize");

class Balance extends Model{
    static init(sequelize){
        super.init(
            {
                balance_amount: DataTypes.INTEGER,
               
            },
            {sequelize, tableName:"user_balance"}
        )
    }
}

module.exports = Balance