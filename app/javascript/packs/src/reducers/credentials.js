import { SET_CREDENTIALS } from '../actions/credentials';

const initialState = {
  access_token: '',
};

const credentialReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
      return { access_token: action.token };
    default:
      return state;
  }
};

export default credentialReducer;
