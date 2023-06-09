"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
exports.UserEntity = new typeorm_1.EntitySchema({
    name: 'user',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        email: {
            type: String,
            nullable: false
        },
        password: {
            type: String,
            nullable: false
        }
    }
});
