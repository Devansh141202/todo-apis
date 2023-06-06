"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_S_0002 = exports.AUTH_S_0001 = void 0;
const global_types_1 = require("../../types/global.types");
exports.AUTH_S_0001 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'SUCCESS_S_0005',
    isNotify: false,
    message: 'you are logged in!!',
    statusCode: 201,
};
exports.AUTH_S_0002 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'SUCCESS_S_0006',
    isNotify: false,
    message: 'User created successfully!!',
    statusCode: 201,
};
