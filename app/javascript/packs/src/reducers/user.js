import {
  SET_USER,
  CREATING_USER,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
} from '../actions/user';

const initialState = {
  info: { name: '', email: '', photo: '' },
  message: '',
  errors: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, name: action.name, email: action.email };
    case CREATING_USER:
      return { ...state, message: 'Creating User' };
    case CREATE_USER_ERROR:
      return { ...state, message: '', errors: action.errors.errors };
    case CREATE_USER_SUCCESS:
      return {
        ...state, message: 'success', errors: [], info: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
