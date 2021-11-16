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
    USER_PREREGISTER_REQUEST,
    USER_PREREGISTER_SUCCESS,
    USER_PREREGISTER_FAILURE,
    UPDATE_PREUSER_INFO,
    USER_LOGOUT,
} from './authTypes'

export const authReducer = (initialState = {
    isLoading : false,
    token : JSON.parse(localStorage.getItem('token')),
    isCreator : localStorage.getItem('isCreator'),
    userId : localStorage.getItem('userId'),
    preRegistration : null,
    preUserInfo : null,
    isVerified : null
}, action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST : 
        case USER_REGISTER_REQUEST : 
        case USER_VERIFICATION_REQUEST :
        case USER_PREREGISTER_REQUEST : 
            return {
                ...initialState,
                isLoading : true
            };
        case USER_LOGIN_SUCCESS :
            return {
                ...initialState,
                isLoading : false,
                token : action.payload.token,
                isCreator : action.payload.isCreator,
                userId : action.payload.userId
            };
        
        case USER_REGISTER_SUCCESS :  
            return {
                ...initialState,
                isLoading : false
            }
        case USER_VERIFICATION_SUCCESS :
            return {
                ...initialState,
                isLoading : false,
                isVerified : true
            }
        case USER_LOGIN_FAILURE : 
        case USER_REGISTER_FAILURE :
        case USER_VERIFICATION_FAILURE :
            return {
                ...initialState,
                isLoading : false
            }
        case USER_PREREGISTER_SUCCESS : 
            return {
                ...initialState,
                isLoading : false,
                preRegistration : true
            }
        case USER_PREREGISTER_FAILURE : 
            return {
                ...initialState,
                isLoading : false,
                preRegistration : false
            }
        case UPDATE_PREUSER_INFO : 
            return {
                ...initialState,
                preUserInfo : action.payload
            }
        case USER_LOGOUT :
            return {
                ...initialState,
                token : null,
                isCreator : null,
                userId : null
            };
        default :
            return initialState;
    }
}
