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

export const authReducer = (initialState = {
    isLoading : false,
    token : null
}, action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST : 
        case USER_REGISTER_REQUEST : 
        case USER_VERIFICATION_REQUEST :
            return {
                ...initialState,
                isLoading : true
            };
        case USER_LOGIN_SUCCESS :
            return {
                ...initialState,
                isLoading : false,
            };
        
        case USER_REGISTER_SUCCESS :  
            return {
                ...initialState,
                isLoading : false
            }
        case USER_VERIFICATION_SUCCESS :
            return {
                ...initialState,
                isLoading : false
            }
        case USER_LOGIN_FAILURE : 
        case USER_REGISTER_FAILURE :
        case USER_VERIFICATION_FAILURE :
            return {
                ...initialState,
                isLoading : false
            }
        case USER_LOGOUT :
            return {
                ...initialState,
                token : null
            };
        default :
            return initialState;
    }
}
