export const SET_USER = 'SET_USER';
export const CREATE_USER = 'CREATE_USER';
export const CREATING_USER = 'CREATING_USER';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';

export const creatingUser = () => ({ type: CREATING_USER });
export const createUserError = errors => ({ type: CREATE_USER_ERROR, errors});
export const createUserSuccess = user => ({ type: CREATE_USER_SUCCESS, user});
import { setCredentialsAsync } from './credentials';

export const createUserAsync = (name, email, password, photo) => (
  async dispatch => {
    dispatch(creatingUser());
    return fetch('/create', {
      method: 'post',
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({
        "user": {
          name, 
          email,
          password,
          photo,
        }
      }),
    })
    .then(result => result.json())
    .then(data => {
      if (!data.id) 
        return dispatch(createUserError(data));
      else {
        dispatch(setCredentialsAsync(email, password));
        return dispatch(createUserSuccess(data));
      }        
    })
  }
);