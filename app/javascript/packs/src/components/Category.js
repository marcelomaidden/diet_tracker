import React from 'react';
import { PropTypes } from 'prop-types';

const Category = ({ name, photo }) => (
  <li className="mb-2">
    <img src={photo} alt={name} className="category-photo" />
    <span>{ name }</span>
  </li>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Category;
