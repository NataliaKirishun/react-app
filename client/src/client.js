import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

import Root from './Root';

const root = (
  <Root
    Router={BrowserRouter}
  />
);

ReactDOM.hydrate(root, document.getElementById('root'));
