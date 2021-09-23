import { types } from "../types/types";

const initialState = JSON.parse(localStorage.getItem("acces-token")) || {}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            
            return {
                token: action.payload.token
            }

        case types.logout:
            return {}
    
        default:
            return state
    }
}