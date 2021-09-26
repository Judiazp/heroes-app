import { types } from "../types/types";

const initialState = {
    characters: JSON.parse(localStorage.getItem('team')) || []
}

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addCharacter:
            
            return {
                characters: action.payload
            }

        case types.removeHero:
            return {
                characters: state.characters.filter(character => character.id !== action.payload)
            }
    
        default:
            return state
    }
}