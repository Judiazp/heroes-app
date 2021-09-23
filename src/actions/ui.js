import { types } from "../types/types"

export const setErrorAction = (err) => {
    return {
        type: types.uiSetError,
        payload: err
    }
}

export const removeErrorAction = () => {
    return {
        type: types.uiRemoveError
    }
}

export const startLoading = () => {
    return {
        type: types.uiStartLoading,
        payload: true
    }
}

export const finishLoading = () => {
    return {
        type: types.uiFinishLoading
    }
}