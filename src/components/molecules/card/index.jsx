import React from 'react'
import { Typography } from '../../atoms/typography'
import { Button } from '../../atoms/button'
import { Modal } from '../modal'
import { useDispatch, useSelector } from 'react-redux';
import { removeCharacter } from '../../../actions/newHero';


export const Card = ({character, preview, id, img, data }) => {

    const {powerstats, biography} = data

    const dispatch = useDispatch()
    const { open } = useSelector(state => state.modal)

    const actionButton = () => {
        preview ? console.log('Agregando') : dispatch( removeCharacter(id) )
    }


    return (
        <div className="card m-2 shadow rounded" 
            style={{
                maxWidth: "250px",
                maxHeight: preview ? "300px" : "500px",
            }}
        >
            { open && 
                <Modal
                    details={data}
                />
            }

            <img 
                src={img}
                className="img-fluid rounded-start"
                style={{
                    height: "100%",
                    width: "100%" 
                }} 
                alt="..."
            />
            <div className="card-body">
                <Typography 
                    styles={`
                        card-title 
                        primary 
                        text-center 
                        ${biography.alignment === 'good' ? ' alert-success' : 'alert-danger' } 
                    `}
                    text={biography.alignment === 'good' ? 'Heroe' : 'Villano'}
                />
                {
                    preview && (
                        <Typography 
                            styles="card-text m-3 h4 text-center" 
                            text={character} 
                        />
                    )
                }

                {
                    !preview && (
                        <div>
                            <Typography 
                                styles="card-text m-1" 
                                text={`Inteligencia: ${ powerstats.intelligence }`} 
                            />
                            <Typography 
                                styles="card-text m-1" 
                                text={`Fuerza: ${powerstats.strength}`} 
                            />
                            <Typography 
                                styles="card-text m-1" 
                                text={`Velocidad: ${powerstats.speed}`} 
                            />
                            <Typography 
                                styles="card-text m-1" 
                                text={`Durabilidad: ${powerstats.durability}`} 
                            />
                            <Typography 
                                styles="card-text m-1" 
                                text={`Poder: ${powerstats.power}`} 
                            />
                            <Typography 
                                styles="card-text m-1 mb-2" 
                                text={`Combate: ${powerstats.combat}`} 
                            />
                        </div>
                    )
                }
                <div className="d-flex  justify-content-around">
                    <Button 
                        text={preview ? 'Agregar al equipo' : 'Detalles' }
                        size="sm"
                        click={ () =>
                            actionButton()
                        }
                    />
                    {
                        !preview && (
                            <Button 
                                text='Eliminar'
                                size="sm"
                                click={ () => dispatch( removeCharacter(id) )}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
