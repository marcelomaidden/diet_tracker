import React from 'react';
import { render } from '@testing-library/react';

import Category from './Category';

const handleMeasure = () => true;

describe('About', () => {
  test('Renders Category component', () => {
    render(<Category
      name="Carbohydrates"
      photo="photo-url"
      handleMeasure={handleMeasure}
    />);
  });
});
