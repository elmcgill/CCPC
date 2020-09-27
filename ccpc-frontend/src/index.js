import React from 'react';
import ReactDOM from 'react-dom';
import {BroswerRouter, BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  rootElement
);

