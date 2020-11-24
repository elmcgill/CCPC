import React from 'react';
import Product from './Product';
import productImg from "../../imgs/slider-pc-1.png";
import './Products.css';

function Products({loading, products}) {
    return (
        <div className="products_div">
            <h1 className="prebuilt_header">Prebuilt Gaming Computers by Category</h1>
            <div className="product_category">
                <h1>Entry Level Gaming Computers</h1>
                <h3>Get your foot in the door of PC Gaming!</h3>
            </div>
            <div className="products">
                {loading ? <h1>Loading Products</h1> : products.map((product, index) => (
                <Product key={index} src={productImg} title={product.title} price={product.price} cpu={product.cpu} graphics={product.gpu} mobo={product.motherboard} mem={product.memory} storage={product.storage} case={product.case} psu={product.psu} />
                ))}
            </div>
        </div>
    )
}

export default Products
