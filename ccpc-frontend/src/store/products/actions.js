import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export const retrieveProducts = (products) => {
    return{
        type: GET_PRODUCTS,
        payload: products
    }
}