import { todoModel } from '../models/todoModel.js'
import { catchAsync } from '../utils/catchAsync.js'
import { Op } from 'sequelize';
import { responseHandler } from '../utils/responseHandler.js';
import { SUCCESS_S_0001, SUCCESS_S_0002, SUCCESS_S_0003, SUCCESS_S_0004 } from '../config/responseCodes/success.js';
import { DB_E_0002 } from '../config/responseCodes/db.js';
import { errorHandler } from '../utils/errorHandler.js';
import { GENERAL_E_0008 } from '../config/responseCodes/general.js';
import { AppError } from '../utils/AppError.js';

const createTodo = catchAsync(async (req, res) => {
    const data = req.body;
    const todo = await todoModel.create(data);
    return responseHandler(res, SUCCESS_S_0001, todo)
})

const getTodo = catchAsync(async (req, res) => {
    const { page, limit, startDate, endDate } = req.query;
    const offset = (page - 1) * limit;
    const size = parseInt(limit)

    const dataFilter = {};
    if (startDate && endDate) {
        dataFilter.dueDate = {
            [Op.between]: [startDate, endDate]
        }
    }
    else if (startDate) {
        dataFilter.dueDate = {
            [Op.gte]: startDate,
        };
    } else if (endDate) {
        dataFilter.dueDate = {
            [Op.lte]: endDate,
        };
    }

    const todos = await todoModel.findAll({
        where: dataFilter,
        offset,
        limit: size,
    });
    return responseHandler(res, SUCCESS_S_0002, todos);

})
const updateTodo = catchAsync(async (req, res) => {
    const todoId = req.params.id;
    const { title, description, dueDate } = req.body;

    const todo = await todoModel.findOne({ where: { id: todoId } });
    if (!todo) {
        // console.log("")
        console.log("error in todocontroller")
        throw new AppError(GENERAL_E_0008)
    }
    else {
        todo.title = title || todo.title
        todo.description = description || todo.description
        todo.dueDate = dueDate || todo.dueDate
        await todo.save();
        return responseHandler(res, SUCCESS_S_0003);
    }

})

const deleteTodo = catchAsync(async (req, res) => {
    const todoId = req.params.id;

    const todo = await todoModel.findOne({ where: { id: todoId } })
    if (!todo) throw new AppError(DB_E_0002)
    else {
        const deletedTodo = await todo.destroy();
        return responseHandler(res, SUCCESS_S_0004, deletedTodo);
    }

})

export { createTodo, getTodo, updateTodo, deleteTodo }