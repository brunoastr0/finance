require('dotenv').config();

const { DB_HOST, DB_PASSWORD, DB_USER, DATABASE } = process.env;

const dbConfig = {
    dialect: 'postgres',
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DATABASE,
    logging: true,
    define: {
        timestamps: true,
        underscored: true,
    }
}

module.exports = dbConfig