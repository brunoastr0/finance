const {Model, DataTypes} = require("sequelize");

class Transaction extends Model{
    static init(sequelize){
        super.init(
            {
                balance_amount: DataTypes.INTEGER,
                last_movement: DataTypes.STRING //Income or Outcome
            }
        )
    }
}