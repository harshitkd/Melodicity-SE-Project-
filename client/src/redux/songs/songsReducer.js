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

export const songsReducer = (initialState = {
    isLoading : false,
    songs : null,
    songPlaylist : null,
    isRatingLoading : false,
    isLikeLoading : false,
    currentSong : null
}, action) => {
    switch(action.type){
        case GET_ALL_SONGS_REQUEST :
        case GET_PLAYLIST_SONGS_REQUEST :
            return {
                ...initialState,
                isLoading : true
            }
        case GET_ALL_SONGS_SUCCESS :
        case GET_PLAYLIST_SONGS_SUCCESS :
        case SET_SONGS :
            return {
                ...initialState,
                isLoading : false,
                songs : action.payload
            }
        case GET_ALL_SONGS_FAILURE :
        case GET_PLAYLIST_SONGS_FAILURE :
            return {
                ...initialState,
                isLoading : false,
            }
        case SET_SONG_PLAYLIST : 
            return {
                ...initialState,
                songPlaylist : action.payload
            }
        case RATE_SONG_REQUEST :
        case CREATE_PLAY_LIST_REQUEST :
        case ADD_TO_PLAYLIST_REQUEST :
            return {
                ...initialState,
                isRatingLoading : true
            }
        case RATE_SONG_SUCCESS :
        case RATE_SONG_FAILURE :
        case CREATE_PLAY_LIST_SUCCESS :
        case CREATE_PLAY_LIST_FAILURE :
        case ADD_TO_PLAYLIST_SUCCESS :
        case ADD_TO_PLAYLIST_FAILURE :
            return {
                ...initialState,
                isRatingLoading : false
            }
        case LIKE_SONG_REQUEST :
            return {
                ...initialState,
                isLikeLoading : true
            }
        case LIKE_SONG_SUCCESS :
        case LIKE_SONG_FAILURE : 
            return {
                ...initialState,
                isLikeLoading : false
            }
        case SET_CURRENT_SONG :
            return {
                ...initialState,
                currentSong : action.payload
            }    
        default :
            return initialState;
    }
}
