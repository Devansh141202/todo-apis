import express from 'express'
const app = express();
import { Router } from "express";
import { authMiddleware } from '../middleware/authMiddleware.js'
import { todoRouter} from './todoRoutes.js';
import { userRouter } from './userRoutes.js';

const mainRouter = Router();
mainRouter.use("/todo",authMiddleware,todoRouter);
mainRouter.use("/user", userRouter);

export { mainRouter }


