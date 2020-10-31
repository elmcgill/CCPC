import {GET_PRODUCTS} from './actions';

const initalState = [];

export default function (state = initalState, action){
    switch(action.type) {
        case GET_PRODUCTS:
            return [...state, ...action.payload]
        default:
            return state;
    }
}