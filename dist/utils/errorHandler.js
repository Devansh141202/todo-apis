"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const responseHandler_1 = __importDefault(require("./responseHandler"));
const db_1 = require("../config/responseCodes/db");
const AppError_js_1 = __importDefault(require("./AppError.js"));
const general_1 = require("../config/responseCodes/general");
const errorHandler = (err, req, res, next) => {
    if (err instanceof sequelize_1.default.DatabaseError) {
        return (0, responseHandler_1.default)(res, db_1.DB_E_0003);
    }
    if (err instanceof sequelize_1.default.UniqueConstraintError) {
        return (0, responseHandler_1.default)(res, db_1.DB_E_0001);
    }
    if (err instanceof sequelize_1.default.ValidationErrorItem) {
        return (0, responseHandler_1.default)(res, db_1.DB_E_0001);
    }
    if (err instanceof AppError_js_1.default) {
        return (0, responseHandler_1.default)(res, err);
    }
    return (0, responseHandler_1.default)(res, general_1.GENERAL_E_0014);
};
exports.errorHandler = errorHandler;
