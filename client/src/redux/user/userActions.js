import axios from 'axios'
import { 
    getUserDetailsRequest,
    getUserDetailsSuccess,
    getUserDetailsFailure
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

const constructHeader = (token) => {
    return {
        headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
    }
}