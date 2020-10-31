import React from 'react';
import ReactDOM from 'react-dom';
import {BroswerRouter, BrowserRouter, Route, Switch} from 'react-router-dom';
import {StoreProvider} from './store';
import rootReducer from './store/rootReducer';
import rootActions from './store/rootActions';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
      <StoreProvider rootReducer={rootReducer} rootActions={rootActions}>
        <App />
      </StoreProvider>
    </BrowserRouter>,
  rootElement
);