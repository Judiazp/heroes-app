import { types } from "../types/types";

const initialState = {
    loading: false,
    error: false,
    msgError: ''
}

export const uiReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case types.uiSetError:
            return {
                ...state,
                error: true,
                msgError: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                error: false,
                msgError: ''
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