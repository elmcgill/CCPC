import React from "react";
import Slider from "../components/carrousel/Slider";
import Products from "../components/products/Products";
import "./Home.css";

function Home({loading, products}) {

  return (
    <div className='home'>
      <Slider id='slider'/>
      <Products id='products' loading={loading} products={products} />
    </div>
  );
}

export default Home;
