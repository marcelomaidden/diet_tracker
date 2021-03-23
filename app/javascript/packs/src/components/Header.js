import React from 'react';

const Header = ({ title }) => (
  <div className="background-blue d-flex p-4">
    <h1 className="h6 text-white mx-auto">{title}</h1>
  </div>
);

export default Header;