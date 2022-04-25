'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_income', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      income_source: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      income_amount:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      income_date: {
        type: Sequelize.DATE,
        allowNull: false
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
    
     await queryInterface.dropTable('user_income');
     
  }
};
