import {
    addAlert as addAlertAction,
    clearAlert as clearAlertAction
} from './alertActionCreators'

export const addError = (message) => {
    return (dispatch) => {
        if(msg === "jwt expired")
            dispatch(userLogout());

        dispatch(addAlertAction(message))
    }
}

export const clearError = () => {
    return (dispatch) => {
        dispatch(clearAlertAction())
    }
}