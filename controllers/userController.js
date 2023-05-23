import bcrypt  from 'bcrypt'
import jwt  from 'jsonwebtoken';
import {userModel}  from '../models/userModel.js';
import { catchAsync }  from '../utils/catchAsync.js';
// import AppError  from ('../utils/AppError');
import {AppError} from '../utils/AppError.js'
import { DB_E_0001 }  from '../config/responseCodes/db.js';
import { responseHandler } from '../utils/responseHandler.js';
import { errorHandler } from '../utils/errorHandler.js';
import { GENERAL_E_0007, GENERAL_E_0013 } from '../config/responseCodes/general.js';
import { SUCCESS_S_0005 } from '../config/responseCodes/success.js';

const register = catchAsync(async (req, res) => {
        const { email, password } = req.body;
        const data = await userModel.findOne({ where: { email } });
        if (data) throw new AppError(DB_E_0001)

        const hashedPass = await bcrypt.hash(password, 10);

        await userModel.create({ email, password: hashedPass })
        // responseHandler(res, 201, )
})
const login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const data = await userModel.findOne({ where: { email } })
    if (!data) return errorHandler(res,GENERAL_E_0007);
    const isPassValid = await bcrypt.compare(password, data.password);

    if (!isPassValid) return errorHandler(res, GENERAL_E_0013) 
    const token = jwt.sign({ userId: data.id }, process.env.JWT_SECRET, { expiresIn: '30m' })
    return errorHandler(res, SUCCESS_S_0005, token)
})


export {register,login}