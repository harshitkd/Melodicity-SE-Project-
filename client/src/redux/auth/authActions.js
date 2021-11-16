import axios from 'axios';
import { addAlert } from '../alert/alertActions'
import {
    userLoginRequest,
    userLoginSuccess,
    userLoginFailure,
    userRegisterRequest,
    userRegisterSuccess,
    userRegisterFailure,
    userPreregisterRequest,
    userPreregisterSuccess,
    userPreregisterFailure,
    userVerificationRequest,
    userVerificationSuccess,
    userVerificationFailure,
    updatePreuserInfo,
    userLogout as logout
} from './authActionCreators'

export const userLogin = (userInfo) => {
    return (dispatch) => {
        dispatch(userLoginRequest());
        axios
            .post('/api/user/auth-routes/login', userInfo)
            .then((res => {
                localStorage.setItem('token',JSON.stringify(res.data.token));
                localStorage.setItem('isCreator',res.data.isCreator);
                localStorage.setItem('userId',res.data.userId);
                dispatch(userLoginSuccess(res.data));
            }))
            .catch((err) => {
                dispatch(addAlert(err.response.data.message));
                dispatch(userLoginFailure());
            });
    }
}

export const userRegister = (userInfo) => {
    return (dispatch) => {
        dispatch(userRegisterRequest());
        axios
            .post('/api/user/auth-routes/register', userInfo)
            .then(res => {
                dispatch(addAlert(res.data.message));
                dispatch(userRegisterSuccess());
            })
            .catch((err) => {
                dispatch(addAlert(err.response.data.message));
                dispatch(userRegisterFailure());
            });
    }
}

export const userPreregister = (userInfo) => {
    return (dispatch) => {
        dispatch(userPreregisterRequest());
        axios
            .post('/api/user/auth-routes/pre-register', userInfo)
            .then(res => {
                dispatch(userPreregisterSuccess());
                dispatch(updatePreuserInfo(userInfo))
            })
            .catch((err) => {
                dispatch(addAlert(err.response.data.message));
                dispatch(userPreregisterFailure());
            });
    }
}

export const userVerification = (verificationInfo) => {
    return (dispatch) => {
        dispatch(userVerificationRequest());
        axios
            .put('/api/user/auth-routes/verify-user', verificationInfo)
            .then((res) => {
                dispatch(addAlert(res.data.message));
                dispatch(userVerificationSuccess());
            }) 
            .catch(err => {
                dispatch(addAlert(err.response.data.message));
                dispatch(userVerificationFailure())
            })
    }
}


export const userLogout = () => {
    return (dispatch) => {
        localStorage.setItem("token", null);
        localStorage.setItem('isCreator',null);
        localStorage.setItem('userId',null);
        dispatch(logout());
    }
}
