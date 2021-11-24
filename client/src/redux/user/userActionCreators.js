import {
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE,
    PUBLISH_SONG_REQUEST,
    PUBLISH_SONG_SUCCESS,
    PUBLISH_SONG_FAILURE,
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILURE,
    UPDATE_USER_COVER_REQUEST,
    UPDATE_USER_COVER_SUCCESS,
    UPDATE_USER_COVER_FAILURE
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

export const getAllUsersRequest = () => {
    return {
        type : GET_ALL_USERS_REQUEST
    }
}

export const getAllUsersSuccess = (details) => {
    return {
        type : GET_ALL_USERS_SUCCESS,
        payload : details
    }
}

export const getAllUsersFailure = () => {
    return {
        type : GET_ALL_USERS_FAILURE
    }
}

export const publishSongRequest = () => {
    return {
        type : PUBLISH_SONG_REQUEST
    }
}

export const publishSongSuccess = (details) => {
    return {
        type : PUBLISH_SONG_SUCCESS,
        payload : details
    }
}

export const publishSongFailure = () => {
    return {
        type : PUBLISH_SONG_FAILURE
    }
}

export const updateUserCoverRequest = () => {
    return {
        type : UPDATE_USER_COVER_REQUEST
    }
}

export const updateUserCoverSuccess = (cover) => {
    return {
        type : UPDATE_USER_COVER_SUCCESS,
        payload : cover
    }
}

export const updateUserCoverFailure = () => {
    return {
        type : UPDATE_USER_COVER_FAILURE
    }
}