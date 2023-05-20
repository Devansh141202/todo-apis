import { RESPONSE_TYPE } from '../../types/global.types'

export const ASSETS_S_0001 = {
    type: RESPONSE_TYPE.SUCCESS,
    code: 'ASSETS_S_0001',
    isNotify: false,
    message: 'Assets fetched',
    statusCode: 200,
}

export const ASSETS_E_0001 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'ASSETS_E_0001',
    isNotify: false,
    message: 'Assets not found',
    statusCode: 404,
}
