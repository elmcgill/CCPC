import React, {useEffect} from 'react';
import Product from './Product';
import productImg from "../../imgs/slider-pc-1.png";
import './Products.css';

function Products({loading, products}) {

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <div className="products">
            <div className="product_row_silver">
                <div className="product_category_light">
                    <h1>Silver Tier Computers</h1>
                    <h3>Get your foot in the door of PC Gaming!</h3>
                </div>
                <div className="products_container">
                    {loading ? <h1>Loading Products</h1> : products.map((product, index) => (
                    <Product key={index} src={productImg} title={product.title} price={product.price} cpu={product.cpu} graphics={product.gpu} mobo={product.motherboard} mem={product.memory} storage={product.storage} case={product.case} psu={product.psu} id={product._id}/>
                    ))}
                </div>
            </div>
            <div className="product_row_gold">
                <div className="product_category_light">
                    <h1>Gold Tier Gaming Computers</h1>
                    <h3>Play all your games at high settings!</h3>
                </div>
                <div className="products_container">
                    {loading ? <h1>Loading Products</h1> : products.map((product, index) => (
                    <Product key={index} src={productImg} title={product.title} price={product.price} cpu={product.cpu} graphics={product.gpu} mobo={product.motherboard} mem={product.memory} storage={product.storage} case={product.case} psu={product.psu} id={product._id}/>
                    ))}
                </div>
            </div>
            <div className="product_row_royal">
                <div className="product_category_light">
                    <h1>Royal Tier Gaming Computers</h1>
                    <h3>For someone who wants the best of the best!</h3>
                </div>
                <div className="products_container">
                    {loading ? <h1>Loading Products</h1> : products.map((product, index) => (
                    <Product key={index} src={productImg} title={product.title} price={product.price} cpu={product.cpu} graphics={product.gpu} mobo={product.motherboard} mem={product.memory} storage={product.storage} case={product.case} psu={product.psu} id={product._id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
