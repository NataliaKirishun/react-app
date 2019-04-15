import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './container/App/App';
import './style.less';
import {
  store, persistor,
} from './store/store';

// if (process.env.NODE_ENV === 'production') {
//
// }
//
// if (process.env.NODE_ENV !== 'production') {
//     console.log('development');
// }

ReactDOM.render(
  (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>),
  document.getElementById('root') || document.createElement('div'));
