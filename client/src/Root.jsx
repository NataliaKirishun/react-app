import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';


const Root = () => (
  <div>
    <h1>Server Side Renderig</h1>
    <div>Hello!</div>
  </div>
);

export default hot(module)(Root);

