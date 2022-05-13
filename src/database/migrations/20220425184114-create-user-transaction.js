"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transactions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      income_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "income",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      outcome_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "outcome",
          key: "id",
        },
        onUpdate:'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  },
};
