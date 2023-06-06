"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = void 0;
const todoModel_1 = require("../models/todoModel");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const sequelize_1 = require("sequelize");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
const db_1 = require("../config/responseCodes/db");
const general_1 = require("../config/responseCodes/general");
const AppError_1 = __importDefault(require("../utils/AppError"));
const auth_1 = require("../config/responseCodes/auth");
const todos_1 = require("../config/responseCodes/todos");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createTodo = (0, catchAsync_1.default)(async (req, res) => {
    const { title, description, dueDate } = req.body;
    const data = {
        title,
        description,
        dueDate
    };
    const todo = await prisma.userModel.create({ data });
    return (0, responseHandler_1.default)(res, auth_1.AUTH_S_0001, todo);
});
const getTodo = (0, catchAsync_1.default)(async (req, res) => {
    const { page = 1, limit = 1, startDate, endDate } = req.query;
    const offset = (+page - 1) * +limit;
    const dataFilter = {};
    if (startDate && endDate) {
        dataFilter.dueDate = {
            [sequelize_1.Op.between]: [startDate, endDate]
        };
    }
    else if (startDate) {
        dataFilter.dueDate = {
            [sequelize_1.Op.gte]: startDate,
        };
    }
    else if (endDate) {
        dataFilter.dueDate = {
            [sequelize_1.Op.lte]: endDate,
        };
    }
    const todos = await todoModel_1.todoModel.findAll({
        where: dataFilter,
        offset,
        limit: +limit,
    });
    return (0, responseHandler_1.default)(res, todos_1.TODOS_S_0002, todos);
});
exports.getTodo = getTodo;
const updateTodo = (0, catchAsync_1.default)(async (req, res) => {
    const todoId = req.params.id;
    const { title, description, dueDate } = req.body;
    const todo = await todoModel_1.todoModel.findOne({ where: { id: todoId } });
    if (!todo) {
        console.log("error in todocontroller");
        throw new AppError_1.default(general_1.GENERAL_E_0008);
    }
    else {
        todo.title = title || todo.title;
        todo.description = description || todo.description;
        todo.dueDate = dueDate || todo.dueDate;
        await todo.save();
        return (0, responseHandler_1.default)(res, todos_1.TODOS_S_0003);
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (0, catchAsync_1.default)(async (req, res) => {
    const todoId = req.params.id;
    const todo = await todoModel_1.todoModel.findOne({ where: { id: todoId } });
    if (!todo)
        throw new AppError_1.default(db_1.DB_E_0002);
    else {
        const deletedTodo = await todo.destroy();
        return (0, responseHandler_1.default)(res, todos_1.TODOS_S_0004, deletedTodo);
    }
});
exports.deleteTodo = deleteTodo;
