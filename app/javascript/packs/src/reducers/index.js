import { combineReducers } from 'redux';
import credentialReducer from './credentials';
import userReducer from './user';

export default combineReducers({ credentials: credentialReducer, user: userReducer });
