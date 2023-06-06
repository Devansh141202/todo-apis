import { RESPONSE_TYPE } from '../../types/global.types'

const GENERAL_E_0001 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0001',
    isNotify: false,
    message: 'Validation error',
    statusCode: 500,
}

const GENERAL_E_0002 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0002',
    isNotify: false,
    message: 'Something went wrong',
    statusCode: 500,
}

const GENERAL_E_0003 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0003',
    isNotify: false,
    message: 'File Upload Failed to S3',
    statusCode: 415,
}

const GENERAL_E_0004 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0004',
    isNotify: false,
    message: 'File Size exceed, Max 20mb supported',
    statusCode: 500,
}

const GENERAL_E_0005 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0005',
    isNotify: false,
    message: 'Files limit exceed',
    statusCode: 500,
}

const GENERAL_E_0006 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0006',
    isNotify: false,
    message: 'Route not found',
    statusCode: 404,
}

const GENERAL_E_0007 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0007',
    isNotify: false,
    message: 'User not found!!',
    statusCode: 401,
}

// const GENERAL_E_0008 = {
//   type: RESPONSE_TYPE.ERROR,
//   code: "GENERAL_E_0008",
//   isNotify: false,
//   message: "Route not found",
//   statusCode: 404,
// };

const GENERAL_E_0008 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0008',
    isNotify: false,
    message: 'No such todo exists!!',
    statusCode: 404,
}

const GENERAL_E_0009 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0009',
    isNotify: false,
    message: 'Company info already exists!!',
    statusCode: 401,
}

const GENERAL_E_0010 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0010',
    isNotify: false,
    message: 'Please login!!',
    statusCode: 403,
}

const GENERAL_E_0011 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0011',
    isNotify: false,
    message: 'No information to update!! Enter some..',
    statusCode: 400,
}

const GENERAL_E_0012 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0012',
    isNotify: false,
    message: 'Work in progress!!',
    statusCode: 404,
}
const GENERAL_E_0013 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0012',
    isNotify: false,
    message: 'Authentication fail!!',
    statusCode: 400,
}
const GENERAL_E_0014 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0014',
    isNotify: false,
    message: 'Something went wrong!!',
    statusCode: 400,
}
const GENERAL_E_0015 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'GENERAL_E_0015',
    isNotify: false,
    message: 'Invalid Credentials!!',
    statusCode: 401,
}

export {GENERAL_E_0001, GENERAL_E_0002, GENERAL_E_0003, GENERAL_E_0004, GENERAL_E_0005, GENERAL_E_0006, GENERAL_E_0007, GENERAL_E_0008, GENERAL_E_0009, GENERAL_E_0010, GENERAL_E_0011, GENERAL_E_0012, GENERAL_E_0013, GENERAL_E_0014, GENERAL_E_0015}
