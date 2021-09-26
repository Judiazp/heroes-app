import axios from "axios";
import { types } from "../types/types";
import { setErrorAction, finishLoading, startLoading } from "./ui"


//Agrega el personaje al equipo

export const startAddCharacter = (character) => {
    return async (dispatch, getState )=> {
        
        dispatch( startLoading() )
        const { characters } = getState().character
        // const FiltroBuenos = characters.filter(hero => hero.biography.alignment === "good")
        try {
            const {data} = await axios.get(`/api/103079892118789/search/${character}`)
            const newCharacter = data.results[0]
            if (characters.map(character => character.id).includes(newCharacter.id)) {
                dispatch( finishLoading() )
                dispatch( setErrorAction('El personaje ya existe') )
            }  else { 
                dispatch( finishLoading() )
                dispatch( addCharacter(newCharacter, characters) )
            }
        } 
        
        catch (error) {
            dispatch( finishLoading() )
            dispatch( setErrorAction('No existe el personaje') )
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

//Hace la peticion http y muestra los resultados.

export const startAddPreview = (character) => {
    return async (dispatch, getState )=> { 
        dispatch( startLoading() )
        try {
            const {data} = await axios.get(`/api/103079892118789/search/${character}`)
            const newCharacter = data.results
            dispatch( finishLoading() )
            dispatch( addPreview(newCharacter) )
        }  
        catch (err) {
            dispatch( finishLoading() )
            dispatch( setErrorAction('No existe el personaje') )
            console.log(err);
        }
    }
}

export const addPreview = (preview) => {
    return {
        type: types.previewCharacter,
        payload: preview    
    }
}

export const removeCharacter = (id) => {
    return {
        type: types.removeHero,
        payload: id
    }
}