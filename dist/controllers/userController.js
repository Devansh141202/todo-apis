"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = require("../models/userModel");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const db_1 = require("../config/responseCodes/db");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
const typeorm_1 = require("typeorm");
const auth_1 = require("../config/responseCodes/auth");
const register = (0, catchAsync_1.default)(async (req, res) => {
    const entityManager = (0, typeorm_1.getManager)();
    const { email, password } = req.body;
    const data = await entityManager.findOne(userModel_1.userModel, email);
    if (data) {
        throw new AppError_1.default(db_1.DB_E_0001);
    }
    else {
        const hashedPass = await bcrypt_1.default.hash(password, 10);
        const newUSer = await entityManager.insert(userModel_1.userModel, { email, password: hashedPass });
        return (0, responseHandler_1.default)(res, auth_1.AUTH_S_0001, newUSer);
    }
});
exports.register = register;
