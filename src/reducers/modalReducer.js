import { types } from "../types/types";

const initialState = {
    open: false
}

export const modalReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        
        case types.openModal:
            return {
                open: action.payload
            }

        case types.closedModal:
            return initialState   

        default:
            return state
    }
}