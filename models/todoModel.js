import {sequelize} from '../db/database.js'
import {DataTypes} from 'sequelize'

const todoModel = sequelize.define('todo',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
},{freezeTableName:true}) 
export {todoModel}