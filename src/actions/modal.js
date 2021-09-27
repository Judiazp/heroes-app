import { types } from "../types/types"

export const openModal = (boolean) => {
    return {
        type: types.openModal,
        payload: boolean 
    }
}

export const closedModal = () => {
    return {
        type: types.closedModal,
    }
}