import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/User/profile';
import Playground from './components/Playground';

export default (
  <Route path='/' component={App}>
    // <Route path='home' component={Home} />
    <Route path='profile/:userName' component={Profile} />
    <Route path='playground' component={Playground} />
    <Route path='about' component={About} />
    <IndexRoute component={Home} />
  </Route>
);
