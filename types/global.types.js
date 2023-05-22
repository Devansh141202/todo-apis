const RESPONSE_TYPE = {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    INFO: 'INFO',
}
const TResponseCode = {
    code: '',
    message: '',
    isNotify: '',
    type: '',
    statusCode: '',
}

const User = {
    entrepreneurId: '',
    name: '',
    email: '',
    phone: null,
    isEmailVerified: undefined,
    isPhoneVerified: undefined
};

const TInvestor = {
    investorId: '',
    name: '',
    email: '',
    phone: null
};


export {RESPONSE_TYPE, TResponseCode, User,TInvestor}