import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { fetchCategoriesAsync } from '../actions/categories';
import { addMeasurementsAsync } from '../actions/measurements';
import Spinner from '../components/Spinner';
import Category from '../components/Category';

const Measurements = ({
  credentials,
  categories,
  user,
  measurements,
  fetchCategories,
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
  const [messageMeasurement, setMessageMeasurement] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (messageMeasurements === 'success') {
      setLoading(false);
      setMessageMeasurement('Measurements added');
    }
    if (message === 'Categories fetched') setLoading(false);
    else if (accessToken !== '' && typeof accessToken !== 'undefined') {
      setLoading(true);
      fetchCategories(accessToken);
    } else if (accessToken === '') history.push('/login');
  }, [loading, message, messageMeasurement]);

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
      <div className="background-blue d-flex p-4">
        <h1 className="h6 text-white mx-auto">Add measurement</h1>
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
          addMeasurements(carboHydrates, fats, proteins, accessToken, id);
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
  fetchCategories: PropTypes.func.isRequired,
  addMeasurements: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  credentials: state.credentials,
  categories: state.categories,
  user: state.user,
  measurements: state.measurements,
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: token => dispatch(fetchCategoriesAsync(token)),
  addMeasurements: (carboHydrates, fats, proteins, token, user) => (
    dispatch(addMeasurementsAsync(carboHydrates, fats, proteins, token, user))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Measurements);
