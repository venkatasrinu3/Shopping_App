import { STACK_NAVIGATION } from "../constants";

export const getStack = (stackProps) => {
    return(
        {
            type:"STACK_NAVIGATION",
            payload:stackProps
        }
    )
}