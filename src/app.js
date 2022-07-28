
const routes = require('./routes/routes')
const authMiddleware = require('./middleware/auth')
const apiErrorHandler = require('./error/api-error-handler')

const express = require('express');
require('./database')
const app = express();


app.use(express.json());
app.use(routes)
app.use(authMiddleware)
app.use(apiErrorHandler)
const PORT = process.env.PORT || 8080
app.listen(PORT, () => { console.log(`http://localhost:${PORT}/api`) })
