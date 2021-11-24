import axios from 'axios'
import { 
    getUserDetailsRequest,
    getUserDetailsSuccess,
    getUserDetailsFailure,
    publishSongRequest,
    publishSongSuccess,
    publishSongFailure,
    getAllUsersRequest,
    getAllUsersSuccess,
    getAllUsersFailure,
    updateUserCoverRequest,
    updateUserCoverSuccess,
    updateUserCoverFailure
} from './userActionCreators';
import {addAlert} from '../alert/alertActions'

export const getUserDetails = (data) => {
    return (dispatch) => {
        dispatch(getUserDetailsRequest());
        const config = constructHeader(data.token);
        axios.get('/api/user/user-routes/user/'+ data.id,config)
        .then(res => {
            dispatch(getUserDetailsSuccess(res.data));
        })
        .catch(err => {
            dispatch(addAlert(err.response.data.message));
            dispatch(getUserDetailsFailure());
        })
    }
}

export const getAllUsers = (data) => {
    return (dispatch) => {
        dispatch(getAllUsersRequest());
        const config = constructHeader(data.token);
        axios.get('/api/user/user-routes/all-users',config)
        .then(res => {
            dispatch(getAllUsersSuccess(res.data));
        })
        .catch(err => {
            dispatch(addAlert(err.response.data.message));
            dispatch(getAllUsersFailure());
        })
    }
}

export const publishSong = (data) => {
    return (dispatch) => {
        dispatch(publishSongRequest());
        const config = constructHeader(data.token);
        axios.post('/api/user/user-routes/publish', data.publishInfo, config )
        .then(res => {
            dispatch(publishSongSuccess(res.data));
        })
        .catch(err => {
            dispatch(addAlert(err.response.data.message));
            dispatch(publishSongFailure());
        })
    }
}

export const updateUserCover = (data) => {
    return (dispatch) => {
        dispatch(updateUserCoverRequest());
        const config = constructHeader(data.token);
        axios.put('/api/user/user-routes/add-user-cover', data.updateInfo, config )
        .then(res => {
            dispatch(updateUserCoverSuccess());
            dispatch(getUserDetailsSuccess(res.data));
        })
        .catch(err => {
            dispatch(addAlert(err.response.data.message));
            dispatch(updateUserCoverFailure());
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