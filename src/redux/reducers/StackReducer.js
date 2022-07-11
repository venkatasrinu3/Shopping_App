import { STACK_NAVIGATION } from "../constants";

const InitialState = {
    stackProps:{}
}

export const StackReducer = (state=InitialState, action) => {
    switch (action.type) {
        case STACK_NAVIGATION:return(
            {
                ...state,
                stackProps:{...state.stackProps, ...action.payload}
            }
        )
    
        default: return state
         
    }
}