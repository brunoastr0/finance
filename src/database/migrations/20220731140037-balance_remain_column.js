'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('user_balance', 'balance_remain',
    {
      type:Sequelize.INTEGER,
      allowNull: true
    })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeColumn('user_balance', 'balance_remain')
  }
};
