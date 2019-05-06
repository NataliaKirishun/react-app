import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

import Root from './Root';
import configureStore from './store/configureStore';

const {store, persistor} = configureStore(window.PRELOADED_STATE);

const root = (
  <Root
    Router={BrowserRouter}
    store={store}
  />
);

ReactDOM.hydrate(root, document.getElementById('root'));
