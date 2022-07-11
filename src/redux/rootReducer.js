import { combineReducers } from "redux";
import categoryReducer from "./reducers/CategoryReducer";
import productsReducer from "./reducers/ProductsReducer";
import { StackReducer } from "./reducers/StackReducer";

const RootReducer = combineReducers(
    {
        stack:StackReducer,
        category:categoryReducer,
        product:productsReducer
    }
)
export default RootReducer