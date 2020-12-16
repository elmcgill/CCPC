import React, {useState, useEffect} from 'react';
import './ProductPage.css';

function ProductPage({products, match: {params: {id}}}) {

    const [loading, setLoading] = useState(true);
    const [productInfo, setProductInfo] = useState([]);

    useEffect(() => {
        const product = products.filter(product => product._id === id);
    })


    return (
        <div className='product-page'>
            <h1>Product Page</h1>
            <h2>{id}</h2>
        </div>
    )
}

export default ProductPage;
