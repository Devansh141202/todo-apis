import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
// import router from './routes/userRoutes.js'
import {todoRouter} from './routes/todoRoutes.js'
import { mainRouter} from './routes/mainRoutes.js'

import bodyParser from 'body-parser'
import { errorHandler } from './utils/errorHandler.js'
import { userRouter } from './routes/userRoutes.js'
import { GENERAL_E_0006 } from './config/responseCodes/general.js'
import { authMiddleware } from './middleware/authMiddleware.js'
import { AppError } from './utils/AppError.js'

class server {
    constructor(app) {
        this.config(app)
    }

    config(app) {
        app.use(express.urlencoded({ extended: true }))
        app.use(morgan('dev'))

        app.use(express.json())

        app.use(cors())

        app.use("/api/v1",mainRouter)
        app.use("/*", (req, res)=>{
            throw new AppError(GENERAL_E_0006)
        })
        app.use(errorHandler)
    }
}
export {server}