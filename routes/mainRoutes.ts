import express from 'express'
const app = express();
import { Router } from "express";
import { authMiddleware } from '../middleware/authMiddleware'
import { todoRouter} from './todoRoutes';
import { userRouter } from './userRoutes';

const mainRouter = Router();
mainRouter.use("/todo",authMiddleware,todoRouter);
mainRouter.use("/user", userRouter);

export { mainRouter }


