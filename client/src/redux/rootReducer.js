import { combineReducers } from 'redux';
import { alertReducer } from './alert/alertReducers';
import { authReducer } from './auth/authReducers'
import { songsReducer } from './songs/songsReducer';
import { userReducer } from './user/userReducers';

const rootReducer = combineReducers({
    auth : authReducer,
    alert : alertReducer,
    user : userReducer,
    songs : songsReducer
  })
  
  export default rootReducer;