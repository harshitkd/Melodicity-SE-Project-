import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_VERIFICATION_REQUEST,
    USER_VERIFICATION_SUCCESS,
    USER_VERIFICATION_FAILURE,
    USER_LOGOUT,
} from './authTypes'

export const userLoginRequest = () => {
    return {
        type : USER_LOGIN_REQUEST
    }
}

export const userLoginSuccess = (token) => {
    return {
        type : USER_LOGIN_SUCCESS,
        payload : token
    }
}

export const userLoginFailure = () => {
    return {
        type : USER_LOGIN_FAILURE
    }
}

export const userRegisterRequest = () => {
    return {
        type : USER_REGISTER_REQUEST
    }
}

export const userRegisterSuccess = () => {
    return {
        type : USER_REGISTER_SUCCESS
    }
}

export const userRegisterFailure = () => {
    return {
        type : USER_REGISTER_FAILURE
    }
}


export const userVerificationRequest = () => {
    return {
        type : USER_VERIFICATION_REQUEST
    }
}

export const userVerificationSuccess = () => {
    return {
        type : USER_VERIFICATION_SUCCESS
    }
}

export const userVerificationFailure = () => {
    return {
        type : USER_VERIFICATION_FAILURE
    }
}

export const userLogout = () => {
    return {
        type : USER_LOGOUT
    }
}