const { createTodo, updateTodo, deleteTodo, getTodo} = require("../controllers/todoController");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/create-todo",createTodo);
router.get("/todo", getTodo);
router.patch("/update-todo/:id",authMiddleware,updateTodo);
router.delete("/delete-todo/:id",authMiddleware,deleteTodo);

module.exports = router

