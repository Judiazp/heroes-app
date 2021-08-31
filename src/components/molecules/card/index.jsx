import React from 'react'
import { Typography } from '../../atoms/typography'
import { Button } from '../../atoms/button'

export const Card = ({character, img, powerstats}) => {
    return (
        <div className="card mb-3" style={{maxWidth: "400px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img 
                        src="https://media1.giphy.com/media/jmpmMqEAkvIzX7hstX/giphy.gif?cid=bba0826bepiakkfb3u69d0judbnl18fm2use6hwoqxc9p3pr&rid=giphy.gif&ct=g" 
                        className="img-fluid rounded-start"
                        style={{
                            height: "100%",
                            width: "100%" 
                        }} 
                        alt="..."
                    />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                        <Typography styles="card-title" text={`Heroe: ${character}`}/>
                        <Typography styles="card-text" text={`Poder: Super fuerza`} />
                        <div className="d-flex  justify-content-around">
                            <Button 
                                text="Detalles"
                            />
                            <Button 
                                text="Eliminar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
