import { setCredentialsAsync, createUserCredentials } from './credentials';

export const SET_USER = 'SET_USER';
export const CREATE_USER = 'CREATE_USER';
export const CREATING_USER = 'CREATING_USER';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const CREATE_USER_CREDENTIALS = 'CREATE_USER_CREDENTIALS';

export const creatingUser = () => ({ type: CREATING_USER });
export const createUserError = errors => ({ type: CREATE_USER_ERROR, errors });

export const createUserAsync = (name, email, password, photo) => (
  async dispatch => {
    dispatch(creatingUser());
    return fetch('/create', {
      method: 'post',
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({
        user: {
          name,
          email,
          password,
          photo,
        },
      }),
    })
      .then(result => result.json())
      .then(data => {
        if (!data.id) return dispatch(createUserError(data));

        dispatch(setCredentialsAsync(email, password));
        return dispatch(createUserCredentials(data));
      });
  }
);
