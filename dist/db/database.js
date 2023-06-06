"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const const_1 = require("../config/const");
dotenv_1.default.config({ path: 'config/.env' });
const typeorm_1 = require("typeorm");
const connectDb = async () => {
    try {
        const dataSource = new typeorm_1.DataSource({
            type: 'mysql',
            host: const_1.dbHost,
            port: 3306,
            username: const_1.dbUser,
            password: const_1.dbPasswrod,
            database: const_1.dbName,
            synchronize: true,
            logging: false,
            entities: ['./ent/*.ts'],
        });
        await dataSource.connect();
        console.log("DB connected!");
    }
    catch (error) {
        console.log(error);
    }
};
exports.connectDb = connectDb;
