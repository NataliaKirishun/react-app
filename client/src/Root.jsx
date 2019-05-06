import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Theme from './common/Theme/Theme';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import HomePage from './HomePage';
import UserPage from './UserPage';
import UsersPage from './UsersPage';

const Root = ({ Router, location, context }) => (
  <Router location={location} context={context}>
    <div>
      <Title>Server Side Renderig</Title>
      <div>Hello!</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/users/:userId" component={UserPage} />
        <Route path="/users" component={UsersPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

const Title = styled.h1` 
    width: 100%;
    background-color: ${Theme.colors.grey};    
`;

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

