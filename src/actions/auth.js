import axios from "axios"
import { types } from "../types/types"
import { removeErrorAction, setErrorAction, finishLoading, startLoading } from "./ui"

export const startLogin = (user) => {
    return dispatch => {      
        dispatch( startLoading() )
        axios({
            method: 'POST',
            url: 'http://challenge-react.alkemy.org/',
            data: user
        }).then(({data}) => {
            const {token} = data
            dispatch( login(token) )
            dispatch( removeErrorAction() )
            dispatch( finishLoading() )
        })
        .catch(() =>{
            dispatch( setErrorAction(true) )
            dispatch( finishLoading() )
        })
    }
}


export const login = (token) => {
    return {
        type: types.login,
        payload: {
            token
        }
    }
}