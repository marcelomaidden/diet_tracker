export const FETCHING_CATEGORIES = 'FETCHING_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';

export const fetchingCategories = () => ({ type: FETCHING_CATEGORIES });
export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories,
});
export const fetchCategoriesError = () => ({ type: FETCH_CATEGORIES_ERROR });

export const fetchCategoriesAsync = accessToken => (
  async dispatch => {
    dispatch(fetchingCategories());

    return fetch('/categories', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(result => result.json())
      .then(categories => dispatch(fetchCategoriesSuccess(categories)))
      .catch(() => dispatch(fetchCategoriesError()));
  }
);
