// Run this example by adding <%= javascript_pack_tag 'index' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render
// <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './src/components/Home';
import NavBar from './src/containers/NavBar';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <NavBar />
      </Router>
    </>,
    document.body.appendChild(document.createElement('div')),
  );
});
