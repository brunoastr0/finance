'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('user_balance', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
      },
      balance_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "user",
          key: "id"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('user_balance');
  }
};
