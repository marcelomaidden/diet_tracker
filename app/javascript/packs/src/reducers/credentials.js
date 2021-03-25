import { SET_CREDENTIALS, SET_CREDENTIALS_ERROR } from '../actions/credentials';

const initialState = {
  accessToken: '',
  message: '',
};

const credentialReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
      return { accessToken: action.token, message: 'success' };
    case SET_CREDENTIALS_ERROR:
      return { ...state, message: 'Invalid credentials' };
    default:
      return state;
  }
};

export default credentialReducer;
