import React, { useState } from 'react'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'
import { Card } from '../card'
import { Typography } from '../../atoms/typography'
import { GridHero } from '../../organisms/Grid'

export const AddTeam = () => {

    return (
        <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <form 
                    style={{height: "100%"}}
                    className="d-flex flex-column shadow rounded p-3 align-items-center m-3"
                >
                    <Typography
                        styles="h4 mt-3 mb-3"
                        text="Crea un equipo"
                    />
                    <Input 
                        type="text" 
                        placeholder="Nombre del equipo"
                        // margin="m-3"
                    />
                    <div className="d-flex m-3">
                        <Input 
                            type="text" 
                            placeholder="Busca un personaje"
                            margin="me-3"
                        />
                        <Button
                            text="Buscar"
                            size="sm"
                        />
                    </div>
                    <Card 
                        character="Super woman"
                        preview={true}
                    />
                    <div className="mt-3" >
                        <Typography text="Has agregado x heroes y x villanos" />
                    </div>
                    <Button
                        text="Crear equipo"
                        
                    />
                </form>
            </div>
        </div>
    )
}
