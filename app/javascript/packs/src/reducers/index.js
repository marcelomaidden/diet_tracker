import { combineReducers } from 'redux';
import credentialReducer from './credentials';
import userReducer from './user';
import categoriesReducer from './categories';

export default combineReducers({
  credentials: credentialReducer,
  user: userReducer,
  categories: categoriesReducer,
});
