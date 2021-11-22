import {
    getAllSongsRequest,
    getAllSongsSuccess,
    getAllSongsFailure,
    rateSongRequest,
    rateSongSuccess,
    rateSongFailure,
    likeSongRequest,
    likeSongSuccess,
    likeSongFailure
} from './songsActionCreators'
import axios from 'axios'
import {addAlert} from '../alert/alertActions'

export const getAllSongs = (data) => {
    return (dispatch) => {
        dispatch(getAllSongsRequest());
        const config = constructHeader(data.token);
        axios.get('/api/songs/song-routes', config )
        .then(res => {
            console.log(res.data)
            dispatch(getAllSongsSuccess(res.data));
        })
        .catch(err => {
            dispatch(addAlert(err.response.data.message));
            dispatch(getAllSongsFailure());
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
        })
        .catch(err => {
            dispatch(addAlert(err.response.data.message));
            dispatch(likeSongFailure());
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