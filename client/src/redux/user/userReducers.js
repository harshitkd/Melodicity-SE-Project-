import {
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE,
    PUBLISH_SONG_REQUEST,
    PUBLISH_SONG_SUCCESS,
    PUBLISH_SONG_FAILURE,
    GET_ALL_USERS_FAILURE,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_REQUEST
} from './userTypes'

export const userReducer = (initialState = {
    isLoading : false,
    isPostLoading : false,
    userInfo : null,
    userList : null
}, action) => {
    switch(action.type){
        case GET_USER_DETAILS_REQUEST :
        case GET_ALL_USERS_REQUEST :
            return {
                ...initialState,
                isLoading : true
            }
        case PUBLISH_SONG_REQUEST :
            return {
                ...initialState,
                isPostLoading : true
            }
        case GET_USER_DETAILS_SUCCESS :
            return {
                ...initialState,
                isLoading : false,
                userInfo : action.payload
            }
        case PUBLISH_SONG_SUCCESS :
            return {
                ...initialState,
                isPostLoading : false,
                userInfo : action.payload
            }
        case GET_ALL_USERS_SUCCESS : 
            return {
                ...initialState,
                userList : action.payload
            }
        case GET_USER_DETAILS_FAILURE :
        case PUBLISH_SONG_FAILURE :
        case GET_ALL_USERS_FAILURE :
            return {
                ...initialState,
                isLoading : false,
                isPostLoading : false
            }
        default :
            return initialState;
    }
}
