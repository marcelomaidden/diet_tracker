import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { fetchCategoriesAsync } from '../actions/categories';
import Spinner from '../components/Spinner';
import Category from '../components/Category';

const Measurements = ({ credentials, categories, fetchCategories }) => {
  const [loading, setLoading] = useState(false);
  const { message, list } = categories;
  const { accessToken } = credentials;
  const [carboHydrates, setCarbohydrates] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [fats, setFats] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (message === 'Categories fetched') setLoading(false);
    else if (accessToken !== '' && typeof accessToken !== 'undefined') {
      setLoading(true);
      fetchCategories(accessToken);
    } else if (accessToken === '') history.push('/login');
  }, [loading, message]);

  const setMeasure = e => {
    const { name, value } = e.target;
    switch(name) {
      case 'Carbohydrates':
        return setCarbohydrates(value);
      case 'Fats':
        return setFats(value);
      case 'Proteins':
        return setProteins(value);
      default:
        return;
    };
  }

  return (
    <div className="measurements">
      <div className="background-blue d-flex p-4">
        <h1 className="h6 text-white mx-auto">Add measurement</h1>
      </div>
      {loading ? <Spinner />
        : (
          <ul className="list-unstyled d-flex flex-column p-3">
            { list.map(category => (
              <Category
                name={category.name}
                key={category.id}
                photo={category.photo}
                handleMeasure={e=> setMeasure(e)}
              />
            ))}
          </ul>
        )};
      <button
        type="button"
        className="button background-green mx-auto p-3 w-100 text-white"
        onClick={() => handleLogin()}
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
  fetchCategories: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  credentials: state.credentials,
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: token => dispatch(fetchCategoriesAsync(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Measurements);
