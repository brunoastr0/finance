const {Model, DataTypes} = require("sequelize");

class Transaction extends Model{
    static init(sequelize){
        super.init(
            {
                userId: {
                    type:DataTypes.INTEGER,
                    references:{
                        model:"user",
                        key:"id"
                    }
                },
                transaction_type: DataTypes.ENUM("INCOME, OUTCOME"),
                amount: DataTypes.INTEGER,
                balance: DataTypes.INTEGER
               
            },
            {sequelize, tableName:"user_tansactions"}
        )
    }
}

module.exports = Transaction