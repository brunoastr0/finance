const routes = require('./routes/routes')

const express = require('express');
require('./database')
const app = express();


app.use(express.json());
app.use(routes)

app.listen(3000, () => {console.log('app running')})
