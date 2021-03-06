import { combineReducers } from 'redux';
import credentialReducer from './credentials';
import userReducer from './user';
import categoriesReducer from './categories';
import measurementsReducer from './measurements';
import menuReducer from './menu';

export default combineReducers({
  credentials: credentialReducer,
  user: userReducer,
  categories: categoriesReducer,
  measurements: measurementsReducer,
  menu: menuReducer,
});
