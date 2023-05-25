import {Sequelize, DataTypes} from 'sequelize' 
import dotenv from "dotenv"
import { dbHost, dbName, dbPasswrod, dbUser, minConn, mxConn } from '../config/const.js';
dotenv.config({path:'config/.env'})

const sequelize = new Sequelize(dbName, dbUser, dbPasswrod, {
    host: dbHost,
    dialect: 'mysql',
    pool: {
        max: mxConn, min: minConn
    },
    define:{
        timestamps:false
    }
});

sequelize.sync().then(() => {
    console.log('Database connected!')
}).catch((error) => {
        console.log(error)
})
export {sequelize};