import {
    GET_ALL_SONGS_REQUEST,
    GET_ALL_SONGS_SUCCESS,
    GET_ALL_SONGS_FAILURE,
    SET_SONG_PLAYLIST,
    RATE_SONG_REQUEST,
    RATE_SONG_SUCCESS,
    RATE_SONG_FAILURE,
    LIKE_SONG_REQUEST,
    LIKE_SONG_SUCCESS,
    LIKE_SONG_FAILURE
} from './songsTypes'

export const getAllSongsRequest = () => {
    return {
        type : GET_ALL_SONGS_REQUEST
    }
}

export const getAllSongsSuccess = (songs) => {
    return {
        type : GET_ALL_SONGS_SUCCESS,
        payload : songs
    }
}

export const getAllSongsFailure = () => {
    return {
        type : GET_ALL_SONGS_FAILURE
    }
}

export const setSongPlaylist = (songPlaylist) => {
    return {
        type : SET_SONG_PLAYLIST,
        payload : songPlaylist
    }
}

export const rateSongRequest = () => {
    return {
        type : RATE_SONG_REQUEST
    }
}

export const rateSongSuccess = () => {
    return {
        type : RATE_SONG_SUCCESS
    }
}

export const rateSongFailure = () => {
    return {
        type : RATE_SONG_FAILURE
    }
}

export const likeSongRequest = () => {
    return {
        type : LIKE_SONG_REQUEST
    }
}

export const likeSongSuccess = () => {
    return {
        type : LIKE_SONG_SUCCESS
    }
}

export const likeSongFailure = () => {
    return {
        type : LIKE_SONG_FAILURE
    }
}
