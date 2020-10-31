import React from 'react';
import ReactDOM from 'react-dom';
import {BroswerRouter, BrowserRouter, Route, Switch} from 'react-router-dom';
import {StateProvider} from "./providers/StateProvider";
import reducer, {initialState} from "./reducers/reducer";

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>,
  rootElement
);

