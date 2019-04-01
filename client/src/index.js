import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App/App';
import './style.less';

// if (process.env.NODE_ENV === 'production') {
//
// }
//
// if (process.env.NODE_ENV !== 'production') {
//     console.log('development');
// }

ReactDOM.render(<App />, document.getElementById('root'));
