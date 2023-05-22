import {RESPONSE_TYPE} from '../../types/global.types.js'

const DB_E_0001 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'DB_E_0001',
    isNotify: false,
    message: 'Unique constraint failed on the {constraint}',
    statusCode: 500,
}

const DB_E_0002 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'DB_E_0002',
    isNotify: false,
    message: 'Record not found!!',
    statusCode: 404,
}

const DB_E_0003 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'DB_E_0003',
    isNotify: false,
    message: 'Database error',
    statusCode: 500,
}
export {DB_E_0001, DB_E_0002, DB_E_0003}
