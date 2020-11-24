import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useStore, useActions} from './store';
import "./App.css";
import axios from "axios";

import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home";
import Products from "./components/products/Products";

function App() {

  const {state} = useStore();
  const {productActions} = useActions();
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products/')
    .then((res) => {
      state.products.length === 0 && productActions.retrieveProducts(res.data.data)
    });

    setLoading(false);
  }, [state.products, productActions]);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <Navbar toggle={toggle}/>
      <Switch>
        <Route path='/'>
          <Home loading={loading} products={state.products}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
