import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './container/App/App';
import './style.less';
import {
  store, persistor,
} from './store/store';

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


ReactDOM.render(
  (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {application}
      </PersistGate>
    </Provider>),
  document.getElementById('root') || document.createElement('div'));
