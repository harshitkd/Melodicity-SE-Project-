import {
    ADD_ALERT,
    CLEAR_ALERT
} from './alertTypes.js';

export const addAlert = (message) => {
    return {
        type : ADD_ALERT,
        payload : message
    }
}

export const clearAlert = () => {
    return {
        type : CLEAR_ALERT
    }
}