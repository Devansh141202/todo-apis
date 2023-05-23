import Sequelize from 'sequelize';
import {responseHandler} from './responseHandler.js';

import { DB_E_0001, DB_E_0002, DB_E_0003 } from '../config/responseCodes/db.js';

export const errorHandler = (err, req, res, next) => {
    console.log(err)
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
    return responseHandler(res,DB_E_0002)
};
// export {errorHandler}