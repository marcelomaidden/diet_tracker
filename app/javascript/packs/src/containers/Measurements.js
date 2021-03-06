import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { addMeasurementsAsync } from '../actions/measurements';
import Spinner from '../components/Spinner';
import Category from '../components/Category';
import Header from '../components/Header';

const Measurements = ({
  credentials,
  categories,
  user,
  measurements,
  addMeasurements,
}) => {
  const [loading, setLoading] = useState(false);
  const { message, list } = categories;
  const { message: messageMeasurements } = measurements;
  const { accessToken } = credentials;
  const { id } = user.info;
  const [carboHydrates, setCarbohydrates] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [fats, setFats] = useState(0);
  const [createdAt, setCreatedAt] = useState(new Date().toLocaleDateString());
  const [messageMeasurement, setMessageMeasurement] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (messageMeasurements === 'success') {
      setLoading(false);
      setMessageMeasurement('Measurements added');
      setCarbohydrates(0);
      setProteins(0);
      setFats(0);
    }
    if (accessToken !== '' && typeof accessToken !== 'undefined') {
      setLoading(false);
    } else if (accessToken === '') history.push('/login');
  }, [loading, message, list, messageMeasurements]);

  const handleDate = e => {
    setCreatedAt(e.target.value);
  };

  const setMeasure = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'Carbohydrates':
        return setCarbohydrates(value);
      case 'Fats':
        return setFats(value);
      case 'Proteins':
        return setProteins(value);
      default:
        return 0;
    }
  };

  return (
    <div className="measurements">
      <Header title="Add measurement" />
      <div className="input-group mb-3 mt-3">
        <input
          type="date"
          className="form-control"
          placeholder="Enter the date"
          aria-label="date"
          name={createdAt}
          onChange={e => { handleDate(e); }}
          aria-describedby="basic-addon1"
        />
      </div>
      { loading ? <Spinner />
        : (
          <ul className="list-unstyled d-flex flex-column p-3">
            { list.map(category => (
              <Category
                name={category.name}
                key={category.id}
                photo={category.photo}
                handleMeasure={e => setMeasure(e)}
              />
            ))}
          </ul>
        )}
      { messageMeasurement !== ''
        ? (
          <div className="alert alert-success mt-2" role="alert" key={alert}>
            {messageMeasurement}
          </div>
        )
        : ''}
      <button
        type="button"
        className="button background-green mx-auto p-3 w-100 text-white"
        onClick={() => {
          setLoading(true);
          setMessageMeasurement('');
          addMeasurements(carboHydrates, fats, proteins, accessToken, id, createdAt);
        }}
      >
        Enter
      </button>
    </div>
  );
};

Measurements.propTypes = {
  credentials: PropTypes.shape({
    accessToken: PropTypes.string,
  }).isRequired,
  categories: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.object),
    message: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    info: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
  measurements: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
  addMeasurements: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  credentials: state.credentials,
  categories: state.categories,
  user: state.user,
  measurements: state.measurements,
});

const mapDispatchToProps = dispatch => ({
  addMeasurements: (carboHydrates, fats, proteins, token, user, createdAt) => (
    dispatch(addMeasurementsAsync(carboHydrates, fats, proteins, token, user, createdAt))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Measurements);
