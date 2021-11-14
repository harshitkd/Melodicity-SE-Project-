import axios from 'axios';
import {
    userLoginRequest,
    userLoginSuccess,
    userLoginFailure,
    userRegisterRequest,
    userRegisterSuccess,
    userRegisterFailure,
    userVerificationRequest,
    userVerificationSuccess,
    userVerificationFailure,
    userLogout as logout
} from './authActionCreators'

export const userLogin = (userInfo) => {
    return (dispatch) => {
        dispatch(userLoginRequest());
        axios
            .post('/api/user/auth-routes/login', userInfo)
            .then((res => {
                dispatch(userLoginSuccess(res.data));
            }))
            .catch((err) => {
                dispatch(userLoginFailure());
            });
    }
}

export const userRegister = (userInfo) => {
    return (dispatch) => {
        dispatch(userRegisterRequest());
        axios
            .post('/api/user/auth-routes/signup', userInfo)
            .then(res => {
                dispatch(userRegisterSuccess());
            })
            .catch((err) => {
                dispatch(userRegisterFailure());
            });
    }
}

export const userVerification = (verificationInfo) => {
    return (dispatch) => {
        dispatch(userVerificationRequest());
        axios
            .put('/api/user/auth-routes/verify-user', verificationInfo)
            .then((res) => {
                dispatch(userVerificationSuccess());
            }) 
            .catch(err => {
                dispatch(userVerificationFailure())
            })
    }
}


export const userLogout = () => {
    return (dispatch) => {
        dispatch(logout());
    }
}
