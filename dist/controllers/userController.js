"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const db_1 = require("../config/responseCodes/db");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
const auth_1 = require("../config/responseCodes/auth");
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = require("jsonwebtoken");
const general_1 = require("../config/responseCodes/general");
const const_1 = require("../config/const");
const prisma = new client_1.PrismaClient();
const register = (0, catchAsync_1.default)(async (req, res) => {
    const { email, password } = req.body;
    const isEmailExists = await prisma.userModel.findUnique(email);
    if (isEmailExists) {
        throw new AppError_1.default(db_1.DB_E_0001);
    }
    else {
        const hashedPass = await bcrypt_1.default.hash(password, 10);
        const newUSer = await prisma.userModel.create({ data: { email, password: hashedPass } });
        return (0, responseHandler_1.default)(res, auth_1.AUTH_S_0001, newUSer);
    }
});
exports.register = register;
const login = (0, catchAsync_1.default)(async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    const data = await prisma.userModel.findUnique({ where: { email } });
    if (!data)
        throw new AppError_1.default(general_1.GENERAL_E_0007);
    else {
        const isPassValid = await bcrypt_1.default.compare(password, data.password);
        if (!isPassValid)
            throw new AppError_1.default(general_1.GENERAL_E_0015);
        else {
            const token = (0, jsonwebtoken_1.sign)({ userId: data.id }, const_1.secretKey, { expiresIn: const_1.expireTokenIn });
            return (0, responseHandler_1.default)(res, auth_1.AUTH_S_0002, token);
        }
    }
});
exports.login = login;
