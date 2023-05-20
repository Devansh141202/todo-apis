const {Sequelize, DataTypes} = require('sequelize') 
require('dotenv').config({path:'config/.env'})
// const seq = require('sequelize')
// const sequelize = new Sequelize('test', 'root', 'admin', {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//     pool: {
//         max: 5, min: 0
//     },
//     define:{
//         timestamps:false
//     }
// });
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

sequelize.authenticate().then(() => {
    console.log('Database connected!')
}).catch((error) => {
        console.log(error)
})
module.exports = sequelize;