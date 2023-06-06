"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TODOS_S_0004 = exports.TODOS_S_0003 = exports.TODOS_S_0002 = exports.TODOS_S_0001 = void 0;
const global_types_1 = require("../../types/global.types");
exports.TODOS_S_0001 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'SUCCESS_S_0001',
    isNotify: false,
    message: 'Todo created successfully!',
    statusCode: 201,
};
exports.TODOS_S_0002 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'SUCCESS_S_0002',
    isNotify: false,
    message: 'Todos fetched successfully!',
    statusCode: 201,
};
exports.TODOS_S_0003 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'SUCCESS_S_0003',
    isNotify: false,
    message: 'Todo updated successfully!',
    statusCode: 201,
};
exports.TODOS_S_0004 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'SUCCESS_S_0004',
    isNotify: false,
    message: 'Todo deleted successfully!',
    statusCode: 201,
};
