const Todo = require('../models/todoModel')

exports.createTodo = async (req, res) => {
    try {
        const data = req.body;
        const todo = await Todo.create(data);
        res.status(201).send({
            success: true,
            message: "Todo created successfully!",
            todo
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "something went wrong while creating a todo"
        })
    }
}

exports.getTodo = async (req, res) => {
    try {
        const {page, limit} = req.query;
        const offset = (page - 1) * limit;
        const size = parseInt(limit)
        const count = await Todo.findAll({
            offset,
            limit:size,
        });
        res.send(count)
    } catch (error) {
        console.log(error)
    }

}
exports.updateTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        const { title, description, dueDate } = req.body;

        const todo = await Todo.findOne({ where: { id: todoId } });
        if (!todo) {
            return res.status(404).send({
                success: false,
                message: 'Todo not found.'
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

    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: "something went wrong while updating todo" })

    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id;

        const todo = await Todo.findOne({ where: { id: todoId } })
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
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: "something went wrong while deleting todo" })

    }
}

// exports.getTodo = async (req, res) => {

// }