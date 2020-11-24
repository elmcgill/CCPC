import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

export default function Button(){
    return(
        <Link to='checkout'>
            <button className='btn'>Checkout</button>
        </Link>
    )
}