import React from 'react';
import { render, screen } from '@testing-library/react';

import Category from './Category';

const handleMeasure = () => {
  return true;
}

describe('About', () => {
  test('Renders Category component', () => {
    render(<Category
      name="Carbohydrates"
      photo="photo-url"
      handleMeasure={handleMeasure}
      />
    );
  })
});