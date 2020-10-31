export const initialState = {
    products: []
};

const reducer = (state, action) => {
    switch(action.type){
        case "GET_PRODUCTS":
            return{
                ...state,
                products: [...state.products, action.item]
            };
        default:
            return state;
    }
};

export default reducer;