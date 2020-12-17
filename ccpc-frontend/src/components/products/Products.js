import React, {useState, useEffect} from 'react';
import Product from './Product';
import productImg from "../../imgs/slider-pc-1.png";
import './Products.css';

function Products({loading, products}) {

    const [silver, setSilver] = useState([]);
    const [gold, setGold] = useState([]);
    const [royal, setRoyal] = useState([]);
    const [filter, setFilter] = useState(true);

    useEffect(() => {
        let s = products.filter(product => product.class === 'silver');
        setSilver(s);
        console.log(silver);

        let g = products.filter(product => product.class === 'gold');
        setGold(g);

        let r = products.filter(product => product.class === 'royal');
        setRoyal(r);

        setFilter(false);

    },[products]);


    const renderSilver = () => {
        if(silver.length>2){
            return(
            silver.map((product, index) => (
                <Product key={index} src={productImg} title={product.title} price={product.price} cpu={product.cpu} graphics={product.gpu} mobo={product.motherboard} mem={product.memory} storage={product.storage} case={product.case} psu={product.psu} id={product._id}/>
            )));
        }
        else {
            return(
                <div>
                    <Product src={productImg} title={'Product Coming Soon'} price={'Coming Soon'} cpu={'TBD'} graphics={'TBD'} mobo={'TBD'} mem={'TBD'} storage={'TBD'} case={'TBD'} psu={'TBD'} />
                    <Product src={productImg} title={'Product Coming Soon'} price={'Coming Soon'} cpu={'TBD'} graphics={'TBD'} mobo={'TBD'} mem={'TBD'} storage={'TBD'} case={'TBD'} psu={'TBD'} />
                    <Product src={productImg} title={'Product Coming Soon'} price={'Coming Soon'} cpu={'TBD'} graphics={'TBD'} mobo={'TBD'} mem={'TBD'} storage={'TBD'} case={'TBD'} psu={'TBD'} />
                </div>
            );
        }
    }

    const renderGold = () => {
        if(gold.length>2){
            return(
            gold.map((product, index) => (
                <Product key={index} src={productImg} title={product.title} price={product.price} cpu={product.cpu} graphics={product.gpu} mobo={product.motherboard} mem={product.memory} storage={product.storage} case={product.case} psu={product.psu} id={product._id}/>
            )));
        }
        else {
            return(
                <div className="products_container">
                    <Product src={productImg} title={'Product Coming Soon'} price={'Coming Soon'} cpu={'TBD'} graphics={'TBD'} mobo={'TBD'} mem={'TBD'} storage={'TBD'} case={'TBD'} psu={'TBD'} />
                    <Product src={productImg} title={'Product Coming Soon'} price={'Coming Soon'} cpu={'TBD'} graphics={'TBD'} mobo={'TBD'} mem={'TBD'} storage={'TBD'} case={'TBD'} psu={'TBD'} />
                    <Product src={productImg} title={'Product Coming Soon'} price={'Coming Soon'} cpu={'TBD'} graphics={'TBD'} mobo={'TBD'} mem={'TBD'} storage={'TBD'} case={'TBD'} psu={'TBD'} />
                </div>
            );
        }
    }

    const renderRoyal = () => {
        if(royal.length>2){
            return(
            royal.map((product, index) => (
                <Product key={index} src={productImg} title={product.title} price={product.price} cpu={product.cpu} graphics={product.gpu} mobo={product.motherboard} mem={product.memory} storage={product.storage} case={product.case} psu={product.psu} id={product._id}/>
            )));
        }
        else {
            return(
                <div className="products_container">
                    <Product src={productImg} title={'Product Coming Soon'} price={'Coming Soon'} cpu={'TBD'} graphics={'TBD'} mobo={'TBD'} mem={'TBD'} storage={'TBD'} case={'TBD'} psu={'TBD'} />
                    <Product src={productImg} title={'Product Coming Soon'} price={'Coming Soon'} cpu={'TBD'} graphics={'TBD'} mobo={'TBD'} mem={'TBD'} storage={'TBD'} case={'TBD'} psu={'TBD'} />
                    <Product src={productImg} title={'Product Coming Soon'} price={'Coming Soon'} cpu={'TBD'} graphics={'TBD'} mobo={'TBD'} mem={'TBD'} storage={'TBD'} case={'TBD'} psu={'TBD'} />
                </div>
            );
        }
    }


    return (
        <div className="products">
            <div className="product_row_silver">
                <div className="product_category_light">
                    <h1>Silver Tier Gaming Computers</h1>
                    <h3>Get your foot in the door of PC Gaming!</h3>
                </div>
                <div className="products_container">
                    {loading ? <h1>Loading Products</h1> : renderSilver()}
                </div>
            </div>
            <div className="product_row_gold">
                <div className="product_category_light">
                    <h1>Gold Tier Gaming Computers</h1>
                    <h3>Play all your games at high settings!</h3>
                </div>
                <div className="products_container">
                    {filter ? <h1>Loading Products</h1> : renderGold()}
                </div>
            </div>
            <div className="product_row_royal">
                <div className="product_category_light">
                    <h1>Royal Tier Gaming Computers</h1>
                    <h3>For someone who wants the best of the best!</h3>
                </div>
                <div className="products_container">
                    {filter ? <h1>Loading Products</h1> : renderRoyal()}
                </div>
            </div>
        </div>
    )
}

export default Products
