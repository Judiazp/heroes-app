import { types } from '../types/types';

const initialState = []

export const searchCharacterReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.searchCharacter:
            return action.payload;

        case types.removePreviewCharacter:
            return state.filter(character => character.id !== action.payload)

        default:
            return state
    }
}