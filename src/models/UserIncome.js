const { Model, DataTypes } = require("sequelize");

class Income extends Model {
  static init(sequelize) {
    super.init(
      {
        income_source: DataTypes.STRING,
        income_amount: DataTypes.INTEGER,
        income_date: DataTypes.DATE,
      },
      { sequelize,
    tableName: "user_income" }
    );
  }
}

module.exports = Income;
