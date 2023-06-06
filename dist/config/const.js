"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbHost = exports.dbPasswrod = exports.dbUser = exports.dbName = exports.secretKey = exports.expireTokenIn = exports.minConn = exports.mxConn = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: 'config/.env' });
exports.PORT = process.env.PORT || 8000;
exports.mxConn = 5;
exports.minConn = 0;
exports.expireTokenIn = '30m';
exports.secretKey = process.env.JWT_SECRET || 'secret';
exports.dbName = process.env.DB_DATABASE;
exports.dbUser = process.env.DB_USER;
exports.dbPasswrod = process.env.DB_PASSWORD;
exports.dbHost = process.env.DB_HOST;
