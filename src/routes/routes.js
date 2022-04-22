const express = require('express')

routes = express.Router()
routes.get('/api/dashboard', (req, res)=>{
    res.json()
})

routes.post('/api/dashboard', (req, res)=>{
    const {title} = req.body;
    const {price} = req.body

    
    
})


module.exports = routes