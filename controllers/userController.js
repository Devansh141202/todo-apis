import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { userModel } from '../models/userModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import { AppError } from '../utils/AppError.js'
import { DB_E_0001 } from '../config/responseCodes/db.js';
import { responseHandler } from '../utils/responseHandler.js';
import { errorHandler } from '../utils/errorHandler.js';
import { GENERAL_E_0007, GENERAL_E_0013 } from '../config/responseCodes/general.js';
import { SUCCESS_S_0005, SUCCESS_S_0006 } from '../config/responseCodes/success.js';
import { expireTokenIn, secretKey } from '../config/const.js';

const register = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const data = await userModel.findOne({ where: { email } });
    if (data) {
        throw new AppError(DB_E_0001)
    }
    else {
        const hashedPass = await bcrypt.hash(password, 10);

        const newUSer = await userModel.create({ email, password: hashedPass })
        return responseHandler(res, SUCCESS_S_0006, newUSer)
    }
})
const login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const data = await userModel.findOne({ where: { email } })
    if (!data) throw new AppError(GENERAL_E_0007)
    else {
        const isPassValid = await bcrypt.compare(password, data.password);

        if (!isPassValid) return errorHandler(res, GENERAL_E_0013)
        else {
            const token = jwt.sign({ userId: data.id }, secretKey, { expiresIn: expireTokenIn})
            return responseHandler(res, SUCCESS_S_0005, token)
        }

    }
})


export { register, login }