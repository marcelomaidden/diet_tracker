import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import { createUserAsync } from '../actions/user';

const SignUp = ({ user, createUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [photo, setPhoto] = useState([]);
  const history = useHistory();
  const { message, errors } = user;

  useEffect(() => {
    if (message === 'success') {
      history.push('/');
    } else if (errors.length > 0) {
      setAlerts(errors);
      setLoading(false);
    } else if (loading) {
      setAlerts([]);
    }
  }, [loading, errors]);

  const handleCreateUser = () => {
    setLoading(true);
    setAlerts([]);
    createUser(name, email, password, photo);
  };

  return (
    <div>
      <Header title="Fill your information" />
      <div className="d-flex flex-column mx-auto w-75 mt-3">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            aria-label="name"
            name="name"
            onChange={e => { setName(e.target.value); }}
            aria-describedby="basic-addon1"
          />
        </div>
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
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="enter the url for an image on the internet"
            aria-label="photo"
            name="photo"
            onChange={e => { setPhoto(e.target.value); }}
            aria-describedby="basic-addon1"
          />
        </div>
        <button
          type="button"
          className="button background-blue mx-auto p-3 w-100 text-white"
          onClick={() => handleCreateUser()}
        >
          Enter
        </button>
        {loading ? <Spinner /> : ''}
        <div className="alerts">
          {
            alerts
              ? (
                alerts.map(alert => (
                  <div className="alert alert-danger mt-2" role="alert" key={alert}>
                    {alert}
                  </div>
                ))
              )
              : ''
          }
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  user: PropTypes.shape({
    message: PropTypes.string.isRequired,
    errors: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  createUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  createUser: (name, email, password, photo) => {
    dispatch(createUserAsync(name, email, password, photo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
