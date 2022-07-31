
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

const authMiddleware = require('./middleware/auth/auth')
const apiErrorHandler = require('./middleware/error/api-error-handler')

const express = require('express');
require('./database')
const app = express();

//middlewares
app.use(express.json());

//routes
app.use(authRoutes)
app.use(userRoutes)

//middlewares
app.use(authMiddleware)
app.use(apiErrorHandler)



module.exports = app
