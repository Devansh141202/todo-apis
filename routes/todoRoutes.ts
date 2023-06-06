import { createTodo, updateTodo, deleteTodo, getTodo } from "../controllers/todoController";
import { authMiddleware } from "../middleware/authMiddleware";

// import {router as todoRouter} from "express";
import { Router } from "express";
const todoRouter = Router()
// todoRouter.Router()
// const todo = () => {
    todoRouter.post("/create-todo", createTodo);
    todoRouter.get("/todo", getTodo);
    todoRouter.patch("/update-todo/:id", updateTodo);
    todoRouter.delete("/delete-todo/:id", deleteTodo);
// }

export { todoRouter}

