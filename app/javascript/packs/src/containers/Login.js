import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { setCredentialsAsync } from '../actions/credentials';
import { fetchCategoriesAsync } from '../actions/categories';
import { fetchMeasurementsAsync } from '../actions/measurements';

const Login = ({
  credentials,
  setCredentials,
  fetchCategories,
  fetchMeasurements,
  user,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const [error, setError] = useState(false);
  const { id } = user.info;
  const history = useHistory();
  const { message, accessToken } = credentials;

  useEffect(() => {
    if (message === 'Invalid credentials') {
      setError(true);
      setAlert(message);
      setLoading(false);
    } else if (id !== '') {
      fetchCategories(accessToken);
      fetchMeasurements(accessToken, id);
      history.push('/dashboard');
    } else if (loading) {
      setAlert('Loading');
      setError(false);
    }
  }, [loading, message, id]);

  const handleLogin = () => {
    setLoading(true);
    setError(false);
    setCredentials(email, password);
  };

  return (
    <div className="d-flex flex-column m-auto w-75">
      <h1 className="h4 mx-auto mt-3 mb-5">Enter your credentials</h1>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">@</span>
        <input
          type="email"
          className="form-control"
          placeholder="example@example.com"
          aria-label="email"
          name="email"
          onChange={e => { setEmail(e.target.value); }}
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="enter your password"
          aria-label="email"
          name="password"
          onChange={e => { setPassword(e.target.value); }}
          aria-describedby="basic-addon1"
        />
      </div>
      <button
        type="button"
        className="button background-blue mx-auto p-3 w-100 text-white"
        onClick={() => handleLogin()}
      >
        Enter
      </button>
      or
      {' '}
      <Link to="/sign-up">Create and account</Link>
      {loading ? <Spinner /> : ''}
      <div>
        {
          error
            ? (
              <div className="alert alert-danger mt-2" role="alert">
                {alert}
              </div>
            )
            : ''
        }
      </div>
    </div>
  );
};

Login.propTypes = {
  credentials: PropTypes.shape({
    message: PropTypes.string.isRequired,
    accessToken: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    info: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
  setCredentials: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  fetchMeasurements: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  credentials: state.credentials,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setCredentials: (email, password) => dispatch(setCredentialsAsync(email, password)),
  fetchCategories: accessToken => (
    dispatch(fetchCategoriesAsync(accessToken))
  ),
  fetchMeasurements: (accessToken, id) => (
    dispatch(fetchMeasurementsAsync(accessToken, id))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
