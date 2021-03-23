import {
  ADD_MEASUREMENTS,
  ADD_MEASUREMENTS_ERROR,
  FETCH_MEASUREMENTS_ERROR,
  FETCH_MEASUREMENTS_SUCCESS,
  FETCH_TODAYS_MEASUREMENTS_SUCCESS,
} from '../actions/measurements';

const initialState = {
  list: [],
  todayList: [],
  message: '',
};

const measurementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEASUREMENTS:
      return { ...state, todayList: [...state.todayList, action.measurement], message: 'success' };
    case ADD_MEASUREMENTS_ERROR:
      return { ...state, message: 'Invalid measurements' };
    case FETCH_MEASUREMENTS_ERROR:
      return { ...state, message: 'error' };
    case FETCH_MEASUREMENTS_SUCCESS:
      return { ...state, message: 'fetch success', list: action.measurements };
    case FETCH_TODAYS_MEASUREMENTS_SUCCESS:
      return { ...state, message: 'fetch today"s success', todayList: action.measurements };
    default:
      return state;
  }
};

export default measurementsReducer;
