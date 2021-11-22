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

export const songsReducer = (initialState = {
    isLoading : false,
    songs : null,
    songPlaylist : null,
    isRatingLoading : false,
    isLikeLoading : false
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
        case RATE_SONG_REQUEST :
            return {
                ...initialState,
                isRatingLoading : true
            }
        case RATE_SONG_SUCCESS :
        case RATE_SONG_FAILURE : 
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
            
        default :
            return initialState;
    }
}
