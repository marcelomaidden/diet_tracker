import React from 'react';
import { PropTypes } from 'prop-types';

const Header = ({ title }) => (
  <div className="background-blue d-flex p-4">
    <h1 className="h6 text-white mx-auto">{title}</h1>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
