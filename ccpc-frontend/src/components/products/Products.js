import React from 'react';
import Product from './Product';
import productImg from "../../imgs/slider-pc-1.png";
import './Products.css';

function Products({loading, products}) {
    return (
        <div className="products">
            <div className="product_row_light">
                <div className="product_category_light">
                    <h1>Entry Level Gaming Computers</h1>
                    <h3>Get your foot in the door of PC Gaming!</h3>
                </div>
                <div className="products_container">
                    {loading ? <h1>Loading Products</h1> : products.map((product, index) => (
                    <Product key={index} src={productImg} title={product.title} price={product.price} cpu={product.cpu} graphics={product.gpu} mobo={product.motherboard} mem={product.memory} storage={product.storage} case={product.case} psu={product.psu} />
                    ))}
                </div>
            </div>
            <div className="product_row_dark">
                <div className="product_category_dark">
                    <h1>Mid Level Gaming Computers</h1>
                    <h3>Play all your games at high settings!</h3>
                </div>
                <div className="products_container">
                    {loading ? <h1>Loading Products</h1> : products.map((product, index) => (
                    <Product key={index} src={productImg} title={product.title} price={product.price} cpu={product.cpu} graphics={product.gpu} mobo={product.motherboard} mem={product.memory} storage={product.storage} case={product.case} psu={product.psu} />
                    ))}
                </div>
            </div>
            <div className="product_row_light">
                <div className="product_category_light">
                    <h1>Enthusiast Level Gaming Computers</h1>
                    <h3>For someone who wants the best of the best!</h3>
                </div>
                <div className="products_container">
                    {loading ? <h1>Loading Products</h1> : products.map((product, index) => (
                    <Product key={index} src={productImg} title={product.title} price={product.price} cpu={product.cpu} graphics={product.gpu} mobo={product.motherboard} mem={product.memory} storage={product.storage} case={product.case} psu={product.psu} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
