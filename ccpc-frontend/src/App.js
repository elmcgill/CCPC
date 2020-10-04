import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
