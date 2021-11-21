import {
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE,
    PUBLISH_SONG_REQUEST,
    PUBLISH_SONG_SUCCESS,
    PUBLISH_SONG_FAILURE
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