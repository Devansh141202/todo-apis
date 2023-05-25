import { createTodo, updateTodo, deleteTodo, getTodo} from "../controllers/todoController.js";
import {authMiddleware} from "../middleware/authMiddleware.js";

// import {router as todoRouter} from "express";
import { Router } from "express";
const todoRouter = Router()
// todoRouter.Router()

todoRouter.post("/create-todo",createTodo);
todoRouter.get("/todo",getTodo);
todoRouter.patch("/update-todo/:id",updateTodo);
todoRouter.delete("/delete-todo/:id",deleteTodo);

export {todoRouter}

