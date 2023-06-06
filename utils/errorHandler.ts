import Sequelize from 'sequelize';
import responseHandler from './responseHandler';
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { DB_E_0001, DB_E_0003 } from '../config/responseCodes/db';
import AppError  from './AppError.js';
import { GENERAL_E_0014 } from '../config/responseCodes/general';

const errorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
    // console.log(err)
    if (err instanceof Sequelize.DatabaseError) {
        return responseHandler(res, DB_E_0003);
    }
    if (err instanceof Sequelize.UniqueConstraintError) {
        return responseHandler(res, DB_E_0001);
    }
    if (err instanceof Sequelize.ValidationErrorItem) {
        return responseHandler(res, DB_E_0001);
    }
    // return next(err);
    if(err instanceof AppError){
        return responseHandler(res,err)
    }
    // console.log(err)
    return responseHandler(res, GENERAL_E_0014)
};
export {errorHandler}