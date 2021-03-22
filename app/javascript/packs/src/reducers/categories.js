import { FETCH_CATEGORIES_ERROR, FETCH_CATEGORIES_SUCCESS, FETCHING_CATEGORIES } from '../actions/categories';

const initialState = {
  list: [],
  message: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CATEGORIES:
      return { ...state, message: 'Fetching categories' };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, message: 'Categories fetched', list: action.categories };
    case FETCH_CATEGORIES_ERROR:
      return { ...state, message: 'Categories not fetched', list: [] };
    default:
      return state;
  }
};

export default categoriesReducer;
