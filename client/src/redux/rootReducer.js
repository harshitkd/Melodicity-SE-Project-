import { combineReducers } from 'redux';
import { alertReducer } from './alert/alertReducers';
import { authReducer } from './auth/authReducers'
import { userReducer } from './user/userReducers';

const rootReducer = combineReducers({
    auth : authReducer,
    alert : alertReducer,
    user : userReducer
  })
  
  export default rootReducer;