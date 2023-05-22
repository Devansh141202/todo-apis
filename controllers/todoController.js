import { todoModel } from '../models/todoModel.js'
import { catchAsync } from '../utils/catchAsync.js'

const createTodo = catchAsync(async (req, res) => {
    const data = req.body;
    const todo = await todoModel.create(data);
    res.status(201).send({
        success: true,
        message: "todoModel created successfully!",
        todo
    })
})

const getTodo = catchAsync(async (req, res) => {
    const { page, limit } = req.query;
    const offset = (page - 1) * limit;
    const size = parseInt(limit)
    const count = await todoModel.findAll({
        offset,
        limit: size,
    });
    res.send(count)

})
const updateTodo = catchAsync(async (req, res) => {
    const todoId = req.params.id;
    const { title, description, dueDate } = req.body;

    const todo = await todoModel.findOne({ where: { id: todoId } });
    if (!todo) {
        return res.status(404).send({
            success: false,
            message: 'todoModel not found.'
        });
    }
    todo.title = title || todo.title
    todo.description = description || todo.description
    todo.dueDate = dueDate || todo.dueDate
    await todo.save();
    res.status(201).send({
        success: true,
        message: "todo updated success fully"
    })
})

const deleteTodo = catchAsync(async (req, res) => {
    const todoId = req.params.id;

    const todo = await todoModel.findOne({ where: { id: todoId } })
    if (!todo) {
        return res.status(500).send({
            success: false,
            message: "todo deletion failed!"
        })
    }
    await todo.destroy();
    res.status(200).send({
        success: true,
        message: "todo deleted successfully"
    })
})

export { createTodo, getTodo, updateTodo, deleteTodo }