const User = require('../models/UserSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuid } = require("uuid");
const ApiError = require('../middleware/error/ApiError');


module.exports = {
    async register(req, res, next) {
        try {
            const { first_name, last_name, email, password } = req.body

            if (!(email && password && first_name && last_name)) {
                next(ApiError.badRequest('All input are required'))
                return;
            }

            const existUser = await User.findOne({ where: { email, email } })

            if (existUser) {
                next(ApiError.conflict('User already Exist. Please Login'))
                return;
            }

            encryptedPassword = await bcrypt.hash(password, process.env.SALT || 10)

            //user
            const json = {
                id: uuid(),
                first_name: first_name.toUpperCase(),
                last_name: last_name.toUpperCase(),
                email: email.toUpperCase(),
                password: encryptedPassword
            }

            // create user
            const user = await User.create(json)
            // create token
            const token = jwt.sign(
                { user_id: user.id, email },
                process.env.TOKEN_KEY || "iwenttotheuniversidade1",
                {
                    expiresIn: '2h'
                }
            )
            //save user token
            user.token = token

            res.status(201).json(user)
            res.redirect('/api/login')
        } catch (err) {
            next(err)

        }
    },


    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            if (!(email && password)) {
                next(ApiError.badRequest('All input are required'))
            }
            const user = await User.findOne({ where: { email, email } })
            if (user && bcrypt.compare(password, user.password)) {

                const token = jwt.sign(
                    { user_id: user.id, email },
                    process.env.TOKEN_KEY || 'iwenttotheuniversidade1',
                    {
                        expiresIn: '2h'
                    }
                )
                user.token = token
                return res.status(200).json({
                    user_id: user.id,
                    'access-token': token
                })

            }
            next(ApiError.badRequest('Invalid credentials'))


        } catch (err) {
            next(err)
        }
    }
}