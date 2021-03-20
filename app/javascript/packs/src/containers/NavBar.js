import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../../../../assets/stylesheets/frontend.scss';
import '../../../../assets/stylesheets/NavBar.scss';

const NavBar = ({ user, credentials }) => {
  const { photo } = user.info;
  const { accessToken } = credentials;

  return (
    <nav className="background-light pb-4">
      <Link
        to="/"
        className="background-blue p-4 text-decoration-none text-white border"
      >
        Home
      </Link>
      {
        accessToken === ''
          ? (
            <Link
              to="/login"
              className="background-blue p-4 text-decoration-none text-white border"
            >
              Sign-in
            </Link>
          )
          : (
            <img
              src={user.info.photo}
              alt="User profile"
              className={`${photo !== '' ? 'profile' : 'd-none'}`}
            />
          )
      }
    </nav>
  );
};

NavBar.propTypes = {
  credentials: PropTypes.shape({
    accessToken: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    info: PropTypes.shape({
      photo: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => (
  {
    user: state.user,
    credentials: state.credentials,
  }
);

export default connect(mapStateToProps, null)(NavBar);
