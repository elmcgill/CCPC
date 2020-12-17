import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useStore, useActions} from './store';
import "./App.css";
import axios from "axios";

import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home";
import Footer from "./components/footer/Footer";

function App() {

  const {state} = useStore();
  const {productActions} = useActions();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products/')
    .then((res) => {
      state.products.length === 0 && productActions.retrieveProducts(res.data.data)
    });

    setLoading(false);
  }, [state.products, productActions]);

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/'>
          <Home loading={loading} products={state.products}/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
