import {
    getAllSongsRequest,
    getAllSongsSuccess,
    getAllSongsFailure,
    rateSongRequest,
    rateSongSuccess,
    rateSongFailure,
    likeSongRequest,
    likeSongSuccess,
    likeSongFailure,
    createPlaylistRequest,
    createPlaylistSuccess,
    createPlaylistFailure,
    addToPlaylistRequest,
    addToPlaylistSuccess,
    addToPlaylistFailure,
    getPlaylistSongsRequest,
    getPlaylistSongsSuccess,
    getPlaylistSongsFailure
} from './songsActionCreators'
import axios from 'axios'
import {addAlert} from '../alert/alertActions'
import { getUserDetailsSuccess } from '../user/userActionCreators'

export const getAllSongs = (data) => {
    return (dispatch) => {
        dispatch(getAllSongsRequest());
        const config = constructHeader(data.token);
        axios.get('/api/songs/song-routes', config )
        .then(res => {
            dispatch(getAllSongsSuccess(res.data));
        })
        .catch(err => {
            dispatch(addAlert(err.response.data.message));
            dispatch(getAllSongsFailure());
        })
    }
}

export const getPlaylistSongs = (data) => {
    return (dispatch) => {
        dispatch(getPlaylistSongsRequest());
        const config = constructHeader(data.token);
        axios.get('/api/songs/song-routes/'+ data.playlistId, config )
        .then(res => {
            dispatch(getPlaylistSongsSuccess(res.data));
        })
        .catch(err => {
            dispatch(addAlert(err.response.data.message));
            dispatch(getPlaylistSongsFailure());
        })
    }
}


export const rateSong = (data) => {
    return (dispatch) => {
        dispatch(rateSongRequest());
        const config = constructHeader(data.token);
        axios.post('/api/songs/song-routes/rate', data.songInfo,config )
        .then(res => {
            dispatch(rateSongSuccess());
            dispatch(addAlert(res.data.message))
        })
        .catch(err => {
            dispatch(addAlert(err.response.data.message));
            dispatch(rateSongFailure());
        })
    }
}

export const likeSong = (data) => {
    return (dispatch) => {
        dispatch(likeSongRequest());
        const config = constructHeader(data.token);
        axios.put('/api/songs/song-routes/like', data.songInfo,config )
        .then(res => {
            dispatch(likeSongSuccess());
            dispatch(addAlert(res.data.message))
            dispatch(getUserDetailsSuccess(res.data.user))
        })
        .catch(err => {
            dispatch(addAlert(err.response.data.message));
            dispatch(likeSongFailure());
        })
    }
}

export const createPlaylist = (data) => {
    return (dispatch) => {
        dispatch(createPlaylistRequest());
        const config = constructHeader(data.token);
        axios.post('/api/songs/song-routes/playlist/create-playlist', data.playlistInfo,config )
        .then(res => {
            dispatch(createPlaylistSuccess());
            dispatch(addAlert(res.data.message))
            dispatch(getUserDetailsSuccess(res.data.user))
        })
        .catch(err => {
            dispatch(addAlert(err.response.data.message));
            dispatch(createPlaylistFailure());
        })
    }
}

export const addToPlaylist = (data) => {
    return (dispatch) => {
        dispatch(addToPlaylistRequest());
        const config = constructHeader(data.token);
        axios.put('/api/songs/song-routes/playlist/add-to-playlist', data.playlistInfo,config )
        .then(res => {
            dispatch(addToPlaylistSuccess());
            dispatch(addAlert(res.data.message))
            dispatch(getUserDetailsSuccess(res.data.user))
        })
        .catch(err => {
            dispatch(addAlert(err.response.data.message));
            dispatch(addToPlaylistFailure());
        })
    }
}


const constructHeader = (token) => {
    return {
        headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
    }
}