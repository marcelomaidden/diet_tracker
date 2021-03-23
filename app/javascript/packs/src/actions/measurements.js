export const ADD_MEASUREMENTS = 'ADD_MEASUREMENTS';
export const ADD_MEASUREMENTS_ERROR = 'ADD_MEASUREMENTS_ERROR';
export const FETCH_MEASUREMENTS_SUCCESS = 'FETCH_MEASUREMENTS_SUCCESS';
export const FETCH_TODAYS_MEASUREMENTS_SUCCESS = 'FETCH_TODAYS_MEASUREMENTS_SUCCESS';
export const FETCH_MEASUREMENTS_ERROR = 'FETCH_MEASUREMENTS_ERROR';

export const addMeasurements = measurement => (
  { type: ADD_MEASUREMENTS, measurement }
);

export const fetchMeasurementsSuccess = measurements => ({
  type: FETCH_MEASUREMENTS_SUCCESS, measurements,
});

export const fetchTodaysMeasurementsSuccess = measurements => ({
  type: FETCH_TODAYS_MEASUREMENTS_SUCCESS, measurements,
});

export const fetchMeasurementsError = () => ({
  type: FETCH_MEASUREMENTS_ERROR,
});

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

export const fetchTodaysMeasurementsAsync = accessToken => async dispatch => fetch('/measurements/today', {
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
      dispatch(fetchTodaysMeasurementsSuccess(data));
    }
  })
  .catch(() => dispatch(fetchMeasurementsError()));

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
        data.forEach(measurement => dispatch(addMeasurements(measurement)));
      }
    })
    .catch(() => dispatch(addMeasurementsError()))
);
