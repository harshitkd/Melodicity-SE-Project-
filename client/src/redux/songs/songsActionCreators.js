import {
    GET_ALL_SONGS_REQUEST,
    GET_ALL_SONGS_SUCCESS,
    GET_ALL_SONGS_FAILURE,
    SET_SONG_PLAYLIST
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

