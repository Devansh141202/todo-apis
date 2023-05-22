import {  login, register } from "../controllers/userController.js";

import router from "express";
import { Router } from "express";
const userRouter = Router();
// userRouter.Router();

userRouter.post("/create", register);
userRouter.get("/login", login);

export {userRouter}