import { combineReducers } from 'redux';
import { alertReducer } from './alert/alertReducers';
import { authReducer } from './auth/authReducers'

const rootReducer = combineReducers({
    auth : authReducer,
    alert : alertReducer
  })
  
  export default rootReducer;