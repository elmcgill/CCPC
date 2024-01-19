import React from 'react';
import {useParams} from 'react-router-dom';

import ProductPage from '../components/productpage/ProductPage';

function Product({products}){
    const {id} = useParams();

    return(
        <div>
            <ProductPage id={id} products={products}/>
        </div>
    );
}

export default Product;