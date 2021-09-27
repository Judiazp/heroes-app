import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '../atoms/typography'

export const PowerstatsTeam = () => {

    const {heroes, villains} = useSelector(state => state.character)
    const listCharacters = heroes.concat(villains)

    const powerstats = [
        {
            ability: "Inteligencia", 
            amountAbility: listCharacters.reduce((counter, character) => {
                return counter + parseInt(character.powerstats.intelligence);
            }, 0)  
        },
        {
            ability: "Fuerza", 
            amountAbility: listCharacters.reduce((counter, character) => {
                return counter + parseInt(character.powerstats.strength);
            }, 0) 
        },
        {
            ability: "Velocidad", 
            amountAbility: listCharacters.reduce((counter, character) => {
                return counter + parseInt(character.powerstats.speed);
            }, 0)   
        },
        {
            ability: "Durabilidad", 
            amountAbility: listCharacters.reduce((counter, character) => {
                return counter + parseInt(character.powerstats.durability);
            }, 0) 
        },
        {
            ability: "Poder", 
            amountAbility: listCharacters.reduce((counter, character) => {
                return counter + parseInt(character.powerstats.power);
            }, 0) 
        },
        {
            ability: "Combate", 
            amountAbility: listCharacters.reduce((counter, character) => {
                return counter + parseInt(character.powerstats.combat);
            }, 0) 
        },
    ]

    return (
        <div className="d-flex mt-5">
            {
                powerstats.map(item => (
                    <div className="shadow alert-info m-2">
                        <Typography 
                            text={`${item.ability} del equipo: ${item.amountAbility}`}
                            styles=" h5 p-3 "
                        />
                    </div>
                ))
            }
        </div>
    )
}
