import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';

import Root from './Root';

const root = (
  <Root />
);

ReactDOM.hydrate(root, document.getElementById('root'));
