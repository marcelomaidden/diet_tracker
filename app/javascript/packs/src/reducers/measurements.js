import {
  ADD_MEASUREMENTS,
  ADD_MEASUREMENTS_ERROR,
  FETCH_MEASUREMENTS_ERROR,
  FETCH_MEASUREMENTS_SUCCESS,
} from '../actions/measurements';

const initialState = {
  list: [],
  message: '',
};

const measurementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEASUREMENTS:
      return { ...state, list: [...state.list, action.measurements], message: 'success' };
    case ADD_MEASUREMENTS_ERROR:
      return { ...state, message: 'Invalid measurements' };
    case FETCH_MEASUREMENTS_ERROR:
      return { ...state, message: 'error' };
    case FETCH_MEASUREMENTS_SUCCESS:
      return { ...state, message: 'success', list: action.measurements };
    default:
      return state;
  }
};

export default measurementsReducer;
