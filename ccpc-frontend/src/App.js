import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import {useStateValue} from "./providers/StateProvider";

import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home";

function App() {

  const [{}, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products/")
    .then((res) => {
      console.log(res.data.data);
      dispatch({
        type: "GET_PRODUCTS",
        item: res.data.data
      });
      setLoading(false);
    });
  }, [dispatch.products]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/'>
          <Home loading={loading} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
