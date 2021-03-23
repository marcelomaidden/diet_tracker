export const ADD_MEASUREMENTS = 'ADD_MEASUREMENTS';
export const ADD_MEASUREMENTS_ERROR = 'ADD_MEASUREMENTS_ERROR';
export const FETCH_MEASUREMENTS_SUCCESS = 'FETCH_MEASUREMENTS_SUCCESS';
export const FETCH_MEASUREMENTS_ERROR = 'FETCH_MEASUREMENTS_ERROR';

export const addMeasurements = (Carbohydrates, Fats, Proteins) => (
  { type: ADD_MEASUREMENTS, measurements: { Carbohydrates, Fats, Proteins } }
);

export const fetchMeasurementsSuccess = measurements => ({
  type: FETCH_MEASUREMENTS_SUCCESS, measurements,
});

export const fetchMeasurementsError = () => ({
  type: FETCH_MEASUREMENTS_ERROR,
});

export const addMeasurementsError = () => ({ type: ADD_MEASUREMENTS_ERROR });

export const addMeasurementsAsync = (Carbohydrates, Fats, Proteins, accessToken, user) => (
  async dispatch => fetch('measurements', {
    method: 'post',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      measurement: {
        Carbohydrates,
        Fats,
        Proteins,
        user,
      },
    }),
  })
    .then(result => {
      if (result.status !== 200) return dispatch(addMeasurementsError());
      return result.json();
    })
    .then(data => {
      if (data.type !== ADD_MEASUREMENTS_ERROR) {
        dispatch(addMeasurements(Carbohydrates, Fats, Proteins));
      }
    })
    .catch(() => dispatch(addMeasurementsError()))
);

export const fetchMeasurementsAsync = accessToken => async dispatch => fetch('/measurements', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${accessToken}`,
  },
})
  .then(result => {
    if (result.status !== 200) return dispatch(fetchMeasurementsError());
    return result.json();
  })
  .then(data => {
    if (data.type !== FETCH_MEASUREMENTS_ERROR) {
      dispatch(fetchMeasurementsSuccess(data));
    }
  })
  .catch(() => dispatch(fetchMeasurementsError()));
