import React, {useEffect, useState} from 'react';
import DisplayProduct from './DisplayProduct';

import './ProductPage.css';

function ProductPage({id, products}) {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const filter = async () => {
            const p = await products.filter(product => product._id === id);
            setProduct(p[0]);

            setLoading(false);
        }

        filter();

    });

    const render = () => {
        if(product === undefined){
            return false;
        }
        else{
            return true;
        }
    }


    return (
        <div className='productPage'>
            {render() ? <DisplayProduct product={product}/> : <h1>Loading...</h1>}
        </div>
    )
}

export default ProductPage;
