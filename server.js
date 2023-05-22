import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
// import router from './routes/userRoutes.js'
import {todoRouter} from './routes/todoRoutes.js'

import bodyParser from 'body-parser'
import { errorHandler } from './utils/errorHandler.js'
import { userRouter } from './routes/userRoutes.js'

class server {
    constructor(app) {
        this.config(app)
    }

    config(app) {
        app.use(express.urlencoded({ extended: true }))
        app.use(morgan('dev'))

        app.use(express.json())

        app.use(cors())

        app.use("/api/v1", userRouter);
        app.use("/api/v1", todoRouter);
        app.use((req, res, next) => {
            res.status(404).send({
                success:false,
                message:"Route not found"
            });
        });
        app.use(errorHandler)
    }
}
export {server}