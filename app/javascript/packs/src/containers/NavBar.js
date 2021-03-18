import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../assets/stylesheets/frontend.scss';
import '../../../../assets/stylesheets/NavBar.scss';

const NavBar = () => (
  <nav className="background-light pb-4">
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

export default NavBar;
