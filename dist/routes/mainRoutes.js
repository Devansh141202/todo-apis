"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const express_2 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const todoRoutes_1 = require("./todoRoutes");
const userRoutes_1 = require("./userRoutes");
const mainRouter = (0, express_2.Router)();
exports.mainRouter = mainRouter;
mainRouter.use("/todo", authMiddleware_1.authMiddleware, todoRoutes_1.todoRouter);
mainRouter.use("/user", userRoutes_1.userRouter);
