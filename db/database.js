import {Sequelize, DataTypes} from 'sequelize' 
import dotenv from "dotenv"
dotenv.config({path:'config/.env'})

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
        max: 5, min: 0
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