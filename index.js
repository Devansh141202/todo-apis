import express from "express"
import {server} from './server.js'
const app = express();
import dotenv from 'dotenv'
dotenv.config({path:'config/.env'})
import './db/database.js'
import { PORT } from "./config/const.js";
new server(app)

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})