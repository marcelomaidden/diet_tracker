// Run this example by adding <%= javascript_pack_tag 'index' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render
// <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Home from './src/components/Home';
import NavBar from './src/containers/NavBar';
import Login from './src/containers/Login';
import SignUp from './src/containers/SignUp';
import '../../assets/stylesheets/frontend.scss';
import rootReducer from './src/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div className="w-50 mx-auto background-light">
          <Switch>
            <div className="main">
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/sign-up" exact component={SignUp} />
            </div>
          </Switch>
          <NavBar />
        </div>
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  );
});
