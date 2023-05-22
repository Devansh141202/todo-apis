import express from "express"
import {server} from './server.js'
const app = express();
import dotenv from 'dotenv'
dotenv.config({path:'config/.env'})
import './db/database.js'
new server(app)

app.listen(8000, () => {
    console.log(`server is running on ${process.env.PORT}`)
})