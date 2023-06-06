import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/AppError'
import { DB_E_0001 } from '../config/responseCodes/db';
import responseHandler from '../utils/responseHandler';
import { AUTH_S_0001, AUTH_S_0002 } from '../config/responseCodes/auth';
import { PrismaClient, userModel } from '@prisma/client';
import { sign } from 'jsonwebtoken';
import { GENERAL_E_0007, GENERAL_E_0015 } from '../config/responseCodes/general';
import { expireTokenIn, secretKey } from '../config/const';
const prisma = new PrismaClient();

const register = catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const isEmailExists = await prisma.userModel.findUnique(email)
    // const data = await entityManager.insert(userModel, {email, password})
    if (isEmailExists) {
        throw new AppError(DB_E_0001)
    }
    else {
        const hashedPass = await bcrypt.hash(password, 10);

        const newUSer = await prisma.userModel.create({ data: { email, password: hashedPass } })
        return responseHandler(res, AUTH_S_0001, newUSer)
    }
})
const login = catchAsync(async (req:Request, res:Response) => {
    const { email, password } = req.body;
    console.log(email)
    const data:any = await prisma.userModel.findUnique({ where: { email } })
    if (!data) throw new AppError(GENERAL_E_0007)
    else {
        const isPassValid = await bcrypt.compare(password, data.password);

        if (!isPassValid) throw new AppError(GENERAL_E_0015)
        else {
            const token = sign({ userId: data.id }, secretKey, { expiresIn: expireTokenIn})
            return responseHandler(res, AUTH_S_0002, token)
        }
    }
})


export { register, login }