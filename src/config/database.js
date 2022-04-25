const path = require('path')
module.exports = {
    dialect: 'sqlite',
    host: 'localhost',
    username: 'root',
    password: 'root',
    storage: path.join(__dirname,'..','database','finance.sqlite3'),
    define: {
        timestamps: true,
        underscored: true,
    }
};