import React from 'react';
import { PropTypes } from 'prop-types';

const CategoryForm = ({ name, photo, handleMeasure }) => (
  <li className="mb-2">
    <img src={photo} alt={name} className="category-photo" />
    <span>{ name }</span>
    <div className="d-flex flex-column mt-3">
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter a valid decimal number"
          aria-label="measure"
          name={name}
          min="0"
          step=".01"
          onChange={e => { handleMeasure(e); }}
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  </li>
);

CategoryForm.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  handleMeasure: PropTypes.func.isRequired,
};

export default CategoryForm;
