import { types } from "../types/types";

const initialState = {
    teams: []
}

export const teamReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case types.createTeam:
            return {
                teams: action.payload
            }            

        case types.removeTeam:
            return {
                
            }
        default:
            return state;
    }
}