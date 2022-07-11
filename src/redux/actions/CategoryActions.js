import { ADD_CATEGORY } from "../constants";

export const getCategory = (category) => {
    return(
        {
            type:ADD_CATEGORY,
            payload:category
        }
    )
}