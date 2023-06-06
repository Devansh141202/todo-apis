"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenId = exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const general_1 = require("../config/responseCodes/general");
const AppError_1 = __importDefault(require("../utils/AppError"));
const const_1 = require("../config/const");
let tokenId;
exports.tokenId = tokenId;
const authMiddleware = async (req, res, next) => {
    console.log("from authmiddleware");
    try {
        const token = req.headers["authorization"]?.split(" ")[1] || null;
        if (token) {
            const tokenDetails = jsonwebtoken_1.default.verify(token, const_1.secretKey);
            req.userId = tokenDetails.id;
            next();
        }
        else {
            throw next(new AppError_1.default(general_1.GENERAL_E_0010));
        }
    }
    catch (error) {
        next(new AppError_1.default(general_1.GENERAL_E_0001));
    }
};
exports.authMiddleware = authMiddleware;
