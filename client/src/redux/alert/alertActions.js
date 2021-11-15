import {
    addAlert as addAlertAction,
    clearAlert as clearAlertAction
} from './alertActionCreators'
import {userLogout } from '../auth/authActions'

export const addAlert = (message) => {
    return (dispatch) => {
        if(message === "jwt expired")
            dispatch(userLogout());

        dispatch(addAlertAction(message))
    }
}

export const clearAlert = () => {
    return (dispatch) => {
        dispatch(clearAlertAction())
    }
}