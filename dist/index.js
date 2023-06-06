"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_js_1 = require("./server.js");
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: 'config/.env' });
require("./db/database.js");
const const_1 = require("./config/const");
new server_js_1.server(app);
app.listen(const_1.PORT, () => {
    console.log(`server is running on ${const_1.PORT}`);
});
