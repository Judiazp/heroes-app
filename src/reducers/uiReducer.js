import { types } from "../types/types";

const initialState = {
    loading: false,
    error: false
}

export const uiReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case types.uiSetError:
            return {
                ...state,
                error: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                error: false
            }
        case types.uiStartLoading:
            return {
                loading: true,  
            }
        case types.uiFinishLoading:
            return {
                loading: false,
            }
        default:
            return state
    }
}