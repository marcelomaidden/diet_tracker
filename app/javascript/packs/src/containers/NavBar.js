import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../../../../assets/stylesheets/frontend.scss';
import '../../../../assets/stylesheets/NavBar.scss';

const NavBar = ({ user }) => (
  <nav className="background-light pb-4">
    <img src={user.info.photo} alt="User profile" className="profile" />
    <Link
      to="/"
      className="background-blue p-4 text-decoration-none text-white border"
    >
      Home
    </Link>
    <Link
      to="/login"
      className="background-blue p-4 text-decoration-none text-white border"
    >
      Sign-in
    </Link>
  </nav>
);

NavBar.propTypes = {
  user: PropTypes.shape({
    info: PropTypes.shape({
      photo: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, null)(NavBar);
