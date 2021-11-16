import {
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE
} from './userTypes'

export const getUserDetailsRequest = () => {
    return {
        type : GET_USER_DETAILS_REQUEST
    }
}

export const getUserDetailsSuccess = (details) => {
    return {
        type : GET_USER_DETAILS_SUCCESS,
        payload : details
    }
}

export const getUserDetailsFailure = () => {
    return {
        type : GET_USER_DETAILS_FAILURE
    }
}