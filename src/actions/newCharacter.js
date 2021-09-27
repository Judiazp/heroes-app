import { types } from "../types/types";

export const addHero = (newHero) => {
    return {
        type: types.addHeroes,
        payload: newHero
    }
}

export const addVillains = (newVillain) => {
    return {
        type: types.addVillains,
        payload: newVillain
    }
}

export const removeHero = (id) => {
    return {
        type: types.removeHero,
        payload: id
    }
}

export const removeVillains = (id) => {
    return {
        type: types.removeVillains,
        payload: id
    }
}