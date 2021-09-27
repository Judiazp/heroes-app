import { types } from "../types/types";

const initialState = JSON.parse(localStorage.getItem('team')) || {
    villains: [],
    heroes: [],
}

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addHeroes:
            return {
                ...state,
                heroes: [action.payload, ...state.heroes]
            }

        case types.addVillains:
            return {
                ...state,
                villains: [action.payload, ...state.villains]
            }

        case types.removeHero:
            return {
                ...state,
                heroes: state.heroes.filter(character => character.id !== action.payload)
            }

        case types.removeVillains:
            return {
                ...state,
                villains: state.villains.filter(character => character.id !== action.payload)
            }

        case types.previewCharacter:
            return {
                ...state,
                previewCharacter: 
                    action.payload, 
                    // ...state.previewCharacter] 
            }
    
        default:
            return state
    }
}