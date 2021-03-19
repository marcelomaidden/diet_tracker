import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../../../assets/stylesheets/frontend.scss';
import '../../../../assets/stylesheets/NavBar.scss';

const NavBar = ({ user }) => (
  <nav className="background-light pb-4">
    {user.info.name}
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

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, null)(NavBar);
