import React from 'react';
import ReactDOM from 'react-dom';
import {BroswerRouter, BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
