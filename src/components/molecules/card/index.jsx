import React from 'react'
import { Typography } from '../../atoms/typography'
import { Button } from '../../atoms/button'

export const Card = ({
    character, 
    img, 
    orientation, 
    preview, 
    methodAdd,
    methodRemove
}) => {
    return (
        <div className="card m-1" style={{maxWidth: "400px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img 
                        src={img}
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
                        <Typography 
                            styles="card-text" 
                            text={`Orientación: ${orientation === 'good' ? 'Buena' : 'Mala'}`} 
                        />
                        <div className="d-flex  justify-content-around">
                            <Button 
                                text={preview ? 'Agregar' : 'Detalles'}
                                size="sm"
                                click={methodAdd}
                            />
                            <Button 
                                text={preview ? 'Quitar' : 'Eliminar'}
                                size="sm"
                                click={methodRemove}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
