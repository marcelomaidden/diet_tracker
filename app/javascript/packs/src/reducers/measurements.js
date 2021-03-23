import { ADD_MEASUREMENTS, ADD_MEASUREMENTS_ERROR } from '../actions/measurements';

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
    default:
      return state;
  }
};

export default measurementsReducer;
