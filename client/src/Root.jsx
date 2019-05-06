import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import App from './container/App/App';

const Root = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <App />
    </Router>
  </Provider>
);



Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
};
Root.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(Root);

