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
            }, 0),
            id: 0  
        },
        {
            ability: "Fuerza", 
            amountAbility: listCharacters.reduce((counter, character) => {
                return counter + parseInt(character.powerstats.strength);
            }, 0),
            id: 1 
        },
        {
            ability: "Velocidad", 
            amountAbility: listCharacters.reduce((counter, character) => {
                return counter + parseInt(character.powerstats.speed);
            }, 0),
            id: 2  
        },
        {
            ability: "Durabilidad", 
            amountAbility: listCharacters.reduce((counter, character) => {
                return counter + parseInt(character.powerstats.durability);
            }, 0),
            id: 3 
        },
        {
            ability: "Poder", 
            amountAbility: listCharacters.reduce((counter, character) => {
                return counter + parseInt(character.powerstats.power);
            }, 0),
            id: 4 
        },
        {
            ability: "Combate", 
            amountAbility: listCharacters.reduce((counter, character) => {
                return counter + parseInt(character.powerstats.combat);
            }, 0),
            id: 5 
        },
    ]

    return (
        <div className="d-flex flex-wrap justify-content-center mt-5">
            {
                powerstats.map(item => (
                    <div className="shadow alert-info m-2">
                        <Typography 
                            key={item.id}
                            text={`${item.ability} del equipo: ${item.amountAbility}`}
                            styles="h5 p-3"
                        />
                    </div>
                ))
            }
        </div>
    )
}
