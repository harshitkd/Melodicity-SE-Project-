import {
    GET_ALL_SONGS_REQUEST,
    GET_ALL_SONGS_SUCCESS,
    GET_ALL_SONGS_FAILURE,
    SET_SONG_PLAYLIST
} from './songsTypes'

export const songsReducer = (initialState = {
    isLoading : false,
    songs : null,
    songPlaylist : null
}, action) => {
    switch(action.type){
        case GET_ALL_SONGS_REQUEST :
            return {
                ...initialState,
                isLoading : true
            }
        case GET_ALL_SONGS_SUCCESS :
            return {
                ...initialState,
                isLoading : false,
                songs : action.payload
            }
        case GET_ALL_SONGS_FAILURE :
            return {
                ...initialState,
                isLoading : false,
            }
        case SET_SONG_PLAYLIST : 
            return {
                ...initialState,
                songPlaylist : action.payload
            }
        default :
            return initialState;
    }
}
