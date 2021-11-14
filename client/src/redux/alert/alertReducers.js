import {
    ADD_ALERT,
    CLEAR_ALERT
} from './alertTypes.js';

export const alertReducer = (initialState = {
    message : null
}, action) => {
    switch(action.type){
        case ADD_ALERT :
            return {
                ...initialState,
                message : action.payload
            }

        case CLEAR_ALERT :
            return{
                ...initialState,
                message : null
            }
        default :
            return initialState
    }
}