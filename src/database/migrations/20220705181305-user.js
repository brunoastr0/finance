'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user',{
      id:{
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
      },
      first_name:{
        type: Sequelize.STRING,
        allowNull:false
      },
      last_name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      password:{
        type:Sequelize.STRING
      },
      token:{
        type:Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user')
  }
};
