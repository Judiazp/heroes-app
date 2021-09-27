import axios from "axios";
import { types } from "../types/types";
import { setErrorAction, finishLoading, startLoading } from "./ui"

export const startAddPreview = (character) => {
    return async (dispatch )=> { 
        dispatch( startLoading() )
        try {
            const {data} = await axios.get(`/api/103079892118789/search/${character}`)

            const newCharacter = data.results
            dispatch( finishLoading() )
            dispatch( addPreview(newCharacter) )
            
        }  catch (error) {
            dispatch( finishLoading() )
            dispatch( setErrorAction('No existe el personaje') )
        }
    }
}

export const addPreview = (preview) => {
    return {
        type: types.searchCharacter,
        payload: preview    
    }
}

export const removePreviewCharacter = (id) => {
    return {
        type: types.removePreviewCharacter,
        payload: id
    }
}