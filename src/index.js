import React from 'react';
import {render} from 'react-dom';
import App from './components/App.js';

import styles from './scss/app.scss';

render(<App/>, document.getElementById('root'));


module.hot.accept(['./components/App.js', './scss/app.scss'], () => {
  const NextApp = require('./components/App.js').default;
  render(
    <NextApp />, document.getElementById('root')
  );
});