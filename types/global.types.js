export enum RESPONSE_TYPE {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    INFO = 'INFO',
}

export type TResponseCode = {
    code: string
    message: string
    isNotify: boolean
    type: RESPONSE_TYPE
    statusCode: number
}

export type User = {
    entrepreneurId: string
    name: string
    email: string
    phone: string | null
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
}

export type TInvestor = {
    investorId: string
    name: string
    email: string
    phone: string | null
}
