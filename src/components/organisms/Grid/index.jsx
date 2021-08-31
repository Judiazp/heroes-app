import React from 'react'
import { Card } from '../../molecules/card'

export const GridHero = ({characterType}) => {
    
    const array = characterType === 'hero' ? 
                        ['spiderman', 'batman', 'superman'] 
                        : ['el joker', 'thanos', 'Magneto']

    return (
        <div className="row d-flex justify-content-center">
            <h1>{characterType}</h1>
            { array.map(item => {
                return(
                    <Card 
                        character={item}
                    />
                )
            })}
        </div>
            
    )
}
