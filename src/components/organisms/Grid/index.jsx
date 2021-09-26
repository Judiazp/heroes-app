import React from 'react'
import { Card } from '../../molecules/card'

export const GridHero = ({array, preview}) => {
    
    // let powerHero = 0
    // let powerTeam = 0

    // characters.forEach(hero => {
    //     const { intelligence, strength, speed, durability, power, combat } = hero.powerstats
    //     powerHero = parseInt(intelligence) + parseInt(strength) + parseInt(speed) + parseInt(durability) + parseInt(power) + parseInt(combat)
    //     powerTeam += powerHero
    // })
    
    return (
        <div className="d-flex flex-wrap justify-content-center">  
            { array.map(item => {
                return(
                    <Card 
                        preview={preview}
                        key={item.id}
                        id={item.id}
                        character={item.name}
                        powerstats={item.powerstats}
                        data={item}
                        img={item.image.url}
                    />
                )
            })}
        </div>
    )
}
