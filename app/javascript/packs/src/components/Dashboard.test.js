import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render, screen } from '../test/testUtils';
import Dashboard from './Dashboard';

it('Renders the connected app with initialState', () => {
  render(
    <Router>
      <Route>
        <Dashboard />
      </Route>
    </Router>,
    {
      initialState:
      {
        measurements: { list: [], todayList: [], message: "" },
      },
    },
  );
  screen.getByText(/There is nothing here yet/i);
});

it('Renders the connected app with measurements', () => {
  render(
    <Router>
      <Route>
        <Dashboard />
      </Route>
    </Router>,
    {
      initialState:
      {
        categories: { list: [
            {
              id: 1,
              photo: "",
              name: "Carbohydrates",
            },
            {
              id: 2,
              photo: "",
              name: "Fats",
            },
          ]
        },
        measurements: { 
          list: [{
            id: 20,
            value: 300.0,
            created_at: "2021-03-24 15:44:34.467098000 +0000",
            category_id: 1,
          }],
          todayList: [{
            id: 20,
            value: 300.0,
            created_at: "2021-03-24 15:44:34.467098000 +0000",
            category_id: 2,
          }],
          message: "" 
        },
      },
    },
  );
  screen.getByText(/Fats/i);
});
