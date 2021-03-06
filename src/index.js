import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrap from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AppWrap/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
