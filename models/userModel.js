import {sequelize} from '../db/database.js'
import {DataTypes} from 'sequelize' 

const userModel = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true, 
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
},{freezeTableName:true})

export {userModel}