const { Model, DataTypes } = require("sequelize");

class Outcome extends Model {
  static init(sequelize) {
    super.init(
      {
        outcome_description: DataTypes.STRING,
        outcome_amount: DataTypes.INTEGER,
        outcome_date: DataTypes.DATE,
      },
      { sequelize, tableName: "user_outcome" }
    );
  }
}

module.exports = Outcome;
