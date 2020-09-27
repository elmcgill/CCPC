import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
      </Switch>
    </Router>
  );
}

export default App;