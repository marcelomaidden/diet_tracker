export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const SET_CREDENTIALS_ERROR = 'SET_CREDENTIALS_ERROR';
import { createUserSuccess } from './user';

export const setCredentials = token => ({ type: SET_CREDENTIALS, token });
export const setCredentialsError = () => ({ type: SET_CREDENTIALS_ERROR });

export const setCredentialsAsync = (email, password) => (
  async dispatch => {
    return fetch('oauth/token', {
      method: 'post',
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({
        email,
        password,
        grant_type: 'password',
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
      }),
    })
    .then(result => {
      if (result.status !== 200)
        return dispatch(setCredentialsError());
      return result.json()
    })
    .then(data => { 
      if (data.type !== 'SET_CREDENTIALS_ERROR') {
        fetch('users/me', {
          method:'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + data.access_token
          }
        })
        .then(result => result.json())
        .then(user => {
          dispatch(createUserSuccess(user));
        });      
        dispatch(setCredentials(data.access_token))
      };
    })
    .catch(() => dispatch(setCredentialsError()));
  }
)