import React from 'react'
import { Card } from '../../molecules/card'
import { Typography } from '../../atoms/typography'
import { Button } from '../../atoms/button'

export const GridHero = ({array, nameTeam}) => {
    
    const arreglo = ['spiderman', 'batman', 'superman' , 'el joker', 'thanos', 'Magneto'] 

    return (
        <div className="row border ">
            <Typography styles="h4 p-3 text-center" text="Equipo 1" />
                { arreglo.map(item => {
                    return(
                        <div className=" col-6">
                            <Card 
                                character={item}
                                methodAdd={(e) => {
                                    e.preventDefault()
                                    console.log('Viendo detalles');
                                }}
                                methodRemove={(e) => {
                                    e.preventDefault()
                                    console.log('Eliminando heroe');
                                }}
                            />
                        </div>
                    )
                })}
                <div className="p-3 text-center">
                    <Button text="Ver estadisticas del equipo" />
                </div>
        </div>
            
    )
}
