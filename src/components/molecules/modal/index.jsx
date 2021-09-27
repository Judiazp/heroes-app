import React from 'react'
import { Button } from '../../atoms/button'
import './modal.css'

export const Modal = ({details, setOpenDetails}) => {

    const { appearance, biography, work} = details

    return (
        <div className="content-modal">
            <div className="modal" >
                <div>
                    <p>Peso: { appearance.weight[1] }</p>
                    <p>Altura: {appearance.height[1]} </p>
                    <p>Nombre: {biography['full-name']} </p>
                    <p>Alias: {biography.aliases[0]} </p>
                    <p>Color de ojos: {appearance['eye-color']} </p>
                    <p> Color de cabello: {appearance['hair-color']} </p>
                    <p> Lugar de trabajo: {work.base} </p>
                </div>
                <Button 
                    text="Cerrar"
                    click={ () => setOpenDetails(false) } 
                /> 
            </div>
        </div>
      
    )
}
