import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App/App';
import './style.less';
import { Provider } from 'react-redux';
import store from "./store/store";


// if (process.env.NODE_ENV === 'production') {
//
// }
//
// if (process.env.NODE_ENV !== 'production') {
//     console.log('development');
// }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
