const dbConfig = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'finance_api',
    logging: true,
    define: {
        timestamps: true,
        underscored: true,
    }
}

module.exports = dbConfig