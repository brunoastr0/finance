const moongose = require('mongoose');
const { MongoClient } = require("mongodb")
require("dotenv").config()
const { MONGODB_URI } = process.env
const { DB_NAME } = process.env

MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to DB: " + error)
    }
    const db = client.db(DB_NAME)
    console.log("Connected to DB")

    db.collection('wallets').insertOne({
        
        'name': "wallet 1",
        'balance': 0
    
    }).then((result) => {
        console.log()
    }).catch((err) => {
        console.log(err)
    })

    

    
})



    module.exports = MongoClient;