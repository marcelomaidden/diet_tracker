export const SET_CREDENTIALS = 'SET_CREDENTIALS';

export const setCredentials = token => ({ type: SET_CREDENTIALS, token });

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
    }).
    then(result => result.json())
    .then(data => dispatch(setCredentials(data.access_token)))
  }
)