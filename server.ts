// import cors from 'cors'
import cors from 'cors'
import {Express, NextFunction, Request, Response} from 'express'
import express from 'express'
import morgan from 'morgan'
// import router from './routes/userRoutes.js'
// import {todoRouter} from './routes/todoRoutes.js'
import { mainRouter} from './routes/mainRoutes'

import bodyParser from 'body-parser'
import { errorHandler } from './utils/errorHandler'
// import { userRouter } from './routes/userRoutes.js'
import { GENERAL_E_0006 } from './config/responseCodes/general'
import { authMiddleware } from './middleware/authMiddleware'
import AppError   from './utils/AppError.js'
// import { connectDb } from './db/database'

class server {
    constructor(app : Express) {
        this.config(app)
    }

    config(app: Express) :void {
        app.use(express.urlencoded({ extended: true }))
        app.use(morgan('dev'))

        app.use(express.json())

        app.use(cors())
        // connectDb();
        app.use("/api/v1",mainRouter)
        app.use("/*", (req:Request, res:Response, next:NextFunction)=>{
            throw new AppError(GENERAL_E_0006)
        })
        app.use(errorHandler)
    }
}
export {server}