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
    LIKE_SONG_FAILURE,
    CREATE_PLAY_LIST_REQUEST,
    CREATE_PLAY_LIST_SUCCESS,
    CREATE_PLAY_LIST_FAILURE,
    ADD_TO_PLAYLIST_REQUEST,
    ADD_TO_PLAYLIST_SUCCESS,
    ADD_TO_PLAYLIST_FAILURE,
    GET_PLAYLIST_SONGS_REQUEST,
    GET_PLAYLIST_SONGS_SUCCESS,
    GET_PLAYLIST_SONGS_FAILURE,
    SET_CURRENT_SONG,
    SET_SONGS
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

export const getPlaylistSongsRequest = () => {
    return {
        type : GET_PLAYLIST_SONGS_REQUEST
    }
}

export const getPlaylistSongsSuccess = (songs) => {
    return {
        type : GET_PLAYLIST_SONGS_SUCCESS,
        payload : songs
    }
}

export const getPlaylistSongsFailure = () => {
    return {
        type : GET_PLAYLIST_SONGS_FAILURE
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

export const createPlaylistRequest = () => {
    return {
        type : CREATE_PLAY_LIST_REQUEST
    }
}

export const createPlaylistSuccess = (details) => {
    return {
        type : CREATE_PLAY_LIST_SUCCESS,
        payload : details
    }
}

export const createPlaylistFailure = () => {
    return {
        type : CREATE_PLAY_LIST_FAILURE
    }
}

export const addToPlaylistRequest = () => {
    return {
        type : ADD_TO_PLAYLIST_REQUEST
    }
}

export const addToPlaylistSuccess = (details) => {
    return {
        type : ADD_TO_PLAYLIST_SUCCESS,
        payload : details
    }
}

export const addToPlaylistFailure = () => {
    return {
        type : ADD_TO_PLAYLIST_FAILURE
    }
}

export const setCurrentSong = (song) => {
    return {
        type : SET_CURRENT_SONG,
        payload : song
    }
}

export const setSongs = (songs) => {
    return {
        type : SET_SONGS,
        payload : songs
    }
}