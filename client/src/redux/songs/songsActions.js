import {
    getAllSongsRequest,
    getAllSongsSuccess,
    getAllSongsFailure
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

const constructHeader = (token) => {
    return {
        headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
    }
}