"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mainRoutes_1 = require("./routes/mainRoutes");
const errorHandler_1 = require("./utils/errorHandler");
const general_1 = require("./config/responseCodes/general");
const AppError_js_1 = __importDefault(require("./utils/AppError.js"));
class server {
    constructor(app) {
        this.config(app);
    }
    config(app) {
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use((0, morgan_1.default)('dev'));
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        app.use("/api/v1", mainRoutes_1.mainRouter);
        app.use("/*", (req, res, next) => {
            throw new AppError_js_1.default(general_1.GENERAL_E_0006);
        });
        app.use(errorHandler_1.errorHandler);
    }
}
exports.server = server;
