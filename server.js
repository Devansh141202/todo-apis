const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const userRouter = require('./routes/userRoutes')
const todoRouter = require('./routes/todoRoutes')
const bodyParser = require('body-parser')

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

    }
}
module.exports = server