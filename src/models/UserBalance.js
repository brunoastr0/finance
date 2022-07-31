const {Model, DataTypes} = require("sequelize");

class Balance extends Model{
    static init(sequelize){
        super.init(
            {
                balance_amount: DataTypes.INTEGER,
                balance_remain: DataTypes.INTEGER,
                userId: {
                    type:DataTypes.INTEGER,
                    references:{
                        model:"user",
                        key:"id"
                    }
                }
               
            },
            {sequelize, tableName:"user_balance"}
        )
    }
}

module.exports = Balance