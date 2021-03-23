import { CHANGE_SELECTED } from '../actions/menu';

const initialState = {
  selected: 'dashboard',
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED:
      return { selected: action.selected };
    default:
      return state;
  }
};

export default menuReducer;
