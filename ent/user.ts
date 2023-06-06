import { EntitySchema } from 'typeorm'

export interface User {
    id: Number,
    email: String,
    password: String
}

export const UserEntity = new EntitySchema<User>({
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
})