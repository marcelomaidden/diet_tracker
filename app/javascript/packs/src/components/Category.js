import React from 'react';
import { PropTypes } from 'prop-types';

const Category = ({ name, photo }) => (
  <li>
    <img src={photo} alt={name} className="category-photo" />
    { name }
  </li>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Category;
