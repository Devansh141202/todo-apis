// import { RESPONSE_TYPE, TResponseCode } from '../types/global.types';\
// const express = require('express')

class AppError extends Error {
    constructor(res, message, result, isNotify) {
        super();
        this.statusCode = res.statusCode;
        this.type = res.type;
        this.code = res.code;
        this.isNotify = isNotify || res.isNotify;
        this.message = message || res.message;
        this.result = result || null;
    }
}

// exports.module = AppError;
export {AppError}