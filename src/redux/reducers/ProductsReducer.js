import { GET_PRODUCTS } from "../constants";

const InitailState = {
    products: []
}
const productsReducer = (state=InitailState,action) => {
    switch (action.type) {
        case GET_PRODUCTS:return(
            {
                ...state,
                products:[...action.payload]
            }
        )
        default:return state
    }
}
export default productsReducer