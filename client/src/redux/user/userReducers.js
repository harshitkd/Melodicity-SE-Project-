import {
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE
} from './userTypes'

export const userReducer = (initialState = {
    isLoading : false,
    userInfo : null
}, action) => {
    switch(action.type){
        case GET_USER_DETAILS_REQUEST :
            return {
                ...initialState,
                isLoading : true
            }
        case GET_USER_DETAILS_SUCCESS :
            return {
                ...initialState,
                isLoading : false,
                userInfo : action.payload
            }
        case GET_USER_DETAILS_FAILURE :
            return {
                ...initialState,
                isLoading : false
            }
        default :
            return initialState;
    }
}
