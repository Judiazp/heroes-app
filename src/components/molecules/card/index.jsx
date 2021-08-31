import React from 'react'
import { Typography } from '../../atoms/typography'
import { Button } from '../../atoms/button'

export const Card = ({character, img, powerstats}) => {
    return (
        <div className="col-10 m-2  card">
            <img 
                src="https://media1.giphy.com/media/jmpmMqEAkvIzX7hstX/giphy.gif?cid=bba0826bepiakkfb3u69d0judbnl18fm2use6hwoqxc9p3pr&rid=giphy.gif&ct=g" 
                alt="heroe" 
                className="card-img-top"
            />
            <div className="card-body">
                <Typography styles="card-title" text={character}/>
                <Typography styles="card-text" text="Super fuerza" />
                <div className="d-flex justify-content-around">
                    <Button 
                        text="Detalles"
                    />
                    <Button 
                        text="Eliminar"
                    />
                </div>
            </div>
        </div>
    )
}
