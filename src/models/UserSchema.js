
const { Model, DataTypes } = require("sequelize")

class User extends Model {
    static init(sequelize) {
        super.init({
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, { sequelize, tableName: 'user' ,
    hooks: {
        afterCreate: (user, options)=>{
            console.log("New User create")
            console.log(user)
        }
    }})
    }
}

module.exports = User