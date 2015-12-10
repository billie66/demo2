import React from 'react';
import Router from 'react-router';
import ReactDom from 'react-dom';
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';

let history = createBrowserHistory();

ReactDom.render(
  <Router history={history}>{routes}</Router>,
  document.getElementById('root')
);
