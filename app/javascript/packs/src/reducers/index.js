import { combineReducers } from 'redux';
import credentialReducer from './credentials';

export default combineReducers({ credentials: credentialReducer });
