import { todoModel } from '@prisma/client';
import catchAsync from '../utils/catchAsync'
// import { Request, Response } from 'express'
import { Op } from 'sequelize';
import responseHandler from '../utils/responseHandler';
import { DB_E_0002 } from '../config/responseCodes/db';
import { GENERAL_E_0001, GENERAL_E_0008 } from '../config/responseCodes/general';
import AppError from '../utils/AppError';
import { AUTH_S_0001 } from '../config/responseCodes/auth';
import { TODOS_S_0002, TODOS_S_0003, TODOS_S_0004 } from '../config/responseCodes/todos';
import { PrismaClient } from '@prisma/client';
import { AuthReq } from '../types/global.types';
import { Request, Response } from 'express';

const prisma = new PrismaClient();


const createTodo = catchAsync(async (req: Request, res: Response) => {
    const { title, description, dueDate }: todoModel = req.body;
    const { userId } = req
    if (!userId) {
        throw new AppError(GENERAL_E_0001)
    }
    else {
        const todo = await prisma.todoModel.create({
            data: {
                title, description, dueDate, userId
            }
        })
        return responseHandler(res, AUTH_S_0001, todo);
    }
})
const getTodo = catchAsync(async (req: Request, res: Response) => {
    const { page = 1, limit = 1, startDate, endDate } = req.query;
    const offset = (+page - 1) * +limit;
    const dataFilter: any = {userId:req.userId};
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

    const todos = await prisma.todoModel.findMany({
        where: dataFilter,
        skip: offset,
        take: +limit,
    });
    return responseHandler(res, TODOS_S_0002, todos);

})
const updateTodo = catchAsync(async (req: Request, res: Response) => {
    const todoId = +req.params.id;
    const { title, description, dueDate } = req.body;
    // const {userId} = req
    const todo = await prisma.todoModel.findFirst({
        where: {
            id: todoId,
            userId: req.userId
        }
    });
    if (!todo) {
        console.log("error in todocontroller")
        throw new AppError(GENERAL_E_0008)
    }
    else {
        const updatedTodo = await prisma.todoModel.update({
            where: { id: todoId },
            data: {
                title: title || todo.title,
                description: description || todo.description,
                dueDate: dueDate || todo.dueDate,
            },
        })
        return responseHandler(res, TODOS_S_0003, updatedTodo);
    }
})

const deleteTodo = catchAsync(async (req: Request, res: Response) => {
    const todoId = +req.params.id;

    const todo = await prisma.todoModel.findFirst({ where: { id: todoId, userId: req.userId } })
    if (!todo) throw new AppError(DB_E_0002)
    else {
        const deletedTodo = await prisma.todoModel.delete({ where: todo });
        return responseHandler(res, TODOS_S_0004, deletedTodo);
    }

})

export { createTodo, getTodo, updateTodo, deleteTodo }