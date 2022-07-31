const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError')
require('dotenv')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      next(ApiError.badRequest('Token is required'))
    }

    const decodedToken = jwt.verify(token, process.env.TOKEN_KEY || 'iwenttotheuniversidade1');
    const userId = decodedToken.user_id
    req.user = decodedToken

    if (req.body.user_id && req.body.user_id !== userId) {
      next(ApiError.badRequest('Invalid User id'))
    } else {
      next();
    }
  } catch (error) {
    next(error)
  }
};