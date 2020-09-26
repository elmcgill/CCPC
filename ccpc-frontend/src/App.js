import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/homepage';
import NotFoundPage from './components/pagenotfound';
import './App.css';

function App() {
  return (
    <Switch>
       <Route path='/' component={Home} exact />
       <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
