import axios from "axios";
import { types } from "../types/types";
import { setErrorAction, finishLoading, startLoading } from "./ui"

export const startAddCharacter = (hero) => {
    
    return async (dispatch, getState )=> {
        
        dispatch( startLoading() )
        
        const { characters } = getState().character
        const state = getState()
        console.log(state);
        // const FiltroBuenos = characters.filter(hero => hero.biography.alignment === "good")

        try {
            const {data} = await axios.get(`/api/103079892118789/search/${hero}`)
            const newCharacter = data.results[0]
            if (characters.map(hero => hero.id).includes(newCharacter.id)) {
                dispatch( finishLoading() )
                dispatch( setErrorAction('El personaje ya existe') )
            }  else { 
                dispatch( finishLoading() )
                dispatch( addCharacter(newCharacter, characters) )
            }
       
        } catch (error) {
            dispatch( finishLoading() )
            dispatch( setErrorAction('No existe el personaje') )
            console.log(error);
        }
    }
}

export const addCharacter = (newCharacter, characters) => {
    return {
        type: types.addCharacter,
        payload: [
            newCharacter,
            ...characters
        ]     
    }
}

export const removeCharacter = (id) => {
    return {
        type: types.removeHero,
        payload: id
    }
}