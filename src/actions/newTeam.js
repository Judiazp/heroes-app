import { types } from "../types/types";
import { logout } from './auth.js'
export const startAddTeam = (nameTeam) => {
    return ( dispatch, getState) => {
        const { teams } = getState().team
        const newTeam = {
            nameTeam,
            character: [],
            id: new Date().getTime()
        }

        JSON.parse(localStorage.getItem("acces-token")) ? 
            dispatch( addTeam( newTeam, teams ) ) 
            : dispatch( logout() )
    }
}

export const addTeam = (newTeam, teams) => {
    return {
        type: types.createTeam,
        payload: [
            newTeam,
            ...teams
        ]
    }
}
