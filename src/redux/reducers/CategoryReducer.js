import { ADD_CATEGORY } from "../constants";

const InitialState = {
    categories: [],
    isLoading: true
}

const categoryReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY: return (
            {
                ...state,
                categories: [...state.categories, ...action.payload],
                isLoading: false
            }
        )
        default: return state
    }
}
export default categoryReducer