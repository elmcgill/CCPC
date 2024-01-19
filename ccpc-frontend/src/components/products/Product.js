import React from 'react';
import { useHistory } from 'react-router-dom';
import './Product.css';

function Product(props) {

    let history = useHistory();

    const navigate = (id) => {
        console.log(id);
        history.push(`/product/${id}`);
    }

    return (
        <div className='product' onClick={() => navigate(props.id)}>
            <img src={props.src} />
            <div className='product_info'>
                <h4>{props.title}</h4>
                <h2 className='product_price'>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </h2>
                <div className='product_specs'>
                    <div className='product_part'>
                        <p>Processor:</p>
                        <p>{props.cpu}</p>
                    </div>
                    <div className='product_part'>
                        <p>Graphics Card:</p>
                        <p>{props.graphics}</p>
                    </div>
                    <div className='product_part'>
                        <p>Motherboard:</p>
                        <p>{props.mobo}</p>
                    </div>
                    <div className='product_part'>
                        <p>Memory (RAM):</p>
                        <p>{props.mem}</p>
                    </div>
                    <div className='product_part'>
                        <p>Storage (HDD/SSD):</p>
                        <p>{props.storage}</p>
                    </div>
                    <div className='product_part'>
                        <p>Case</p>
                        <p>{props.case}</p>
                    </div>
                    <div className='product_part'>
                        <p>Power Supply:</p>
                        <p>{props.psu}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
