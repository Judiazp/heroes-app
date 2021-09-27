import React from 'react'
import { Card } from '../../molecules/card'

export const GridHero = ({array, preview}) => {
    
    return (
        <div className="d-flex flex-wrap justify-content-center">    
            {
                array.map(item => {
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
                })
            }
        </div>
    )
}
