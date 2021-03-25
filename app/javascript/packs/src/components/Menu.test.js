import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { render } from '../test/testUtils';
import Menu from './Menu';

it('Renders the Menu component with User info', () => {
  render(
    <Router>
      <Route>
        <Menu />
      </Route>
    </Router>,
    {
      initialState:
      {
        user: {
          info: { photo: '', name: 'Marcelo' },
        },
      },
    },
  );
  screen.getByText(/Marcelo/i);
});
