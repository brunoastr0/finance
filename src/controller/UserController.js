const UserBalance = require('../models/UserBalance')

module.exports = {
    async index(req, res){

        const balance = await UserBalance.findAll({})
        return res.json(balance)
        
        
    }
}