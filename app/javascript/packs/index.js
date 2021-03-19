// Run this example by adding <%= javascript_pack_tag 'index' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render
// <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './src/components/Home';
import NavBar from './src/containers/NavBar';
import Login from './src/containers/Login';
import '../../assets/stylesheets/frontend.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <div className="w-50 mx-auto background-light">
        <Switch>
          <div className="main">
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
          </div>
        </Switch>
        <NavBar />
      </div>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  );
});
