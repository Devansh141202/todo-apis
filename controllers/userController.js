import bcrypt  from 'bcrypt'
import jwt  from 'jsonwebtoken';
import {userModel}  from '../models/userModel.js';
import { catchAsync }  from '../utils/catchAsync.js';
// import AppError  from ('../utils/AppError');
import {AppError} from '../utils/AppError.js'
import { DB_E_0001 }  from '../config/responseCodes/db.js';

const register = catchAsync(async (req, res) => {
    // try {
        const { email, password } = req.body;
        // const data = await userModel.findOne({ where: { email } });
        // console.log(Email)
        // const appError = new AppError()
        // if (data) throw new AppError(DB_E_0001)

        const hashedPass = await bcrypt.hash(password, 10);

        await userModel.create({ email, password: hashedPass })
        res.status(200).send({
            success: true,
            message: "User created successfully"
        })

    // } catch (error) {
    //     console.log(error)
    //     res.status(500).send({ success: false, message: "something went wrong while creating user" })
    // }
})
const login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const data = await userModel.findOne({ where: { email } })
    if (!data) {
        return res.status(401).send({
            success: false,
            message: "User Not found"
        })
    }
    const isPassValid = await bcrypt.compare(password, data.password);

    if (!isPassValid) {
        return res.status(401).send({
            success: false,
            message: "Authentication fail!!"
        })
    }
    const token = jwt.sign({ userId: data.id }, process.env.JWT_SECRET, { expiresIn: '30m' })
    res.status(200).send({
        success: true,
        message: "you are logged in!!",
        token
    })
})


export {register,login}