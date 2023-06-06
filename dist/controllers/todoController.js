"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
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
    const { userId } = req;
    if (!userId) {
        throw new AppError_1.default(general_1.GENERAL_E_0001);
    }
    else {
        const todo = await prisma.todoModel.create({
            data: {
                title, description, dueDate, userId
            }
        });
        return (0, responseHandler_1.default)(res, auth_1.AUTH_S_0001, todo);
    }
});
exports.createTodo = createTodo;
const getTodo = (0, catchAsync_1.default)(async (req, res) => {
    const { page = 1, limit = 1, startDate, endDate } = req.query;
    const offset = (+page - 1) * +limit;
    const dataFilter = { userId: req.userId };
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
    const todos = await prisma.todoModel.findMany({
        where: dataFilter,
        skip: offset,
        take: +limit,
    });
    return (0, responseHandler_1.default)(res, todos_1.TODOS_S_0002, todos);
});
exports.getTodo = getTodo;
const updateTodo = (0, catchAsync_1.default)(async (req, res) => {
    const todoId = +req.params.id;
    const { title, description, dueDate } = req.body;
    const todo = await prisma.todoModel.findFirst({
        where: {
            id: todoId,
            userId: req.userId
        }
    });
    if (!todo) {
        console.log("error in todocontroller");
        throw new AppError_1.default(general_1.GENERAL_E_0008);
    }
    else {
        const updatedTodo = await prisma.todoModel.update({
            where: { id: todoId },
            data: {
                title: title || todo.title,
                description: description || todo.description,
                dueDate: dueDate || todo.dueDate,
            },
        });
        return (0, responseHandler_1.default)(res, todos_1.TODOS_S_0003, updatedTodo);
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (0, catchAsync_1.default)(async (req, res) => {
    const todoId = +req.params.id;
    const todo = await prisma.todoModel.findFirst({ where: { id: todoId, userId: req.userId } });
    if (!todo)
        throw new AppError_1.default(db_1.DB_E_0002);
    else {
        const deletedTodo = await prisma.todoModel.delete({ where: todo });
        return (0, responseHandler_1.default)(res, todos_1.TODOS_S_0004, deletedTodo);
    }
});
exports.deleteTodo = deleteTodo;
