import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

const NavBar = ({ credentials }) => {
  const { accessToken } = credentials;

  return (
    <nav className="background-light pb-4">
      {
        accessToken === ''
          ? (
            <Link
              to="/login"
              className="background-blue p-4 w-25 text-decoration-none text-white border"
            >
              Sign-in
            </Link>
          )
          : (
            <div className="d-flex flex-md-row flex-column">
              <Link
                to="/dashboard"
                className="background-blue
                p-4
                w-25
                text-center
                text-decoration-none
                text-white border
                d-flex"
              >
                Dashboard
              </Link>
              <Link
                to="/measures"
                className="background-dark
                  p-4
                  text-decoration-none
                  d-flex
                  flex-column
                  text-white border
                  text-center
                  w-25"
              >
                <i className="fa fa-bar-chart" />
                <span>Add measure</span>
              </Link>
              <Link
                to="/progress"
                className="background-dark
                  p-4
                  text-decoration-none
                  d-flex
                  w-25
                  flex-column
                  text-center
                  text-white
                  border"
              >
                <i className="fa fa-pie-chart" />
                <span>Your progress</span>
              </Link>
              <Link
                to="/menu"
                className="background-dark p-4 w-25 d-flex flex-column text-center text-decoration-none text-white border"
              >
                <span className="fa">...</span>
                <span>More</span>
              </Link>
            </div>
          )
      }
    </nav>
  );
};

NavBar.propTypes = {
  credentials: PropTypes.shape({
    accessToken: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => (
  {
    credentials: state.credentials,
  }
);

export default connect(mapStateToProps, null)(NavBar);
