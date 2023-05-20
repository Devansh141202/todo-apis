const express = require("express")
const Server = require('./server')
const app = express();
require('dotenv').config({path:'config/.env'})
require('./db/database')
new Server(app)

app.listen(8000, () => {
    console.log(`server is running on ${process.env.PORT}`)
})