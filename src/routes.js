import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Profile from './components/User/profile';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='profile/:userName' component={Profile} />
  </Route>
);
