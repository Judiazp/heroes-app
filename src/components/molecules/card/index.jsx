import React from 'react'
import { Typography } from '../../atoms/typography'
import { Button } from '../../atoms/button'
import { Modal } from '../modal'
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../actions/modal'
import { removeCharacter } from '../../../actions/newHero';


export const Card = ({ character, id, img, data }) => {

    const {powerstats, biography} = data

    const dispatch = useDispatch()
    const { open } = useSelector(state => state.modal)

    return (
        <div className="card m-2" 
            style={{
                maxWidth: "250px",
                maxHeight: "500px"
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
            <div className="card-body row">
                <Typography 
                    styles={`
                        card-title 
                        primary 
                        text-center 
                        ${biography.alignment === 'good' ? ' alert-success' : 'alert-danger' } 
                    `}
                    text={biography.alignment === 'good' ? 'Heroe' : 'Villano'}
                />
                <Typography styles="card-title text-center alert-info" text={` ${character}`}/>
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
                        styles="card-text m-2" 
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
                <div className="d-flex  justify-content-around">
                    <Button 
                        text='Detalles'
                        size="sm"
                        click={ (e) =>
                            dispatch( openModal(true) )
                        }
                    />
                    <Button 
                        text='Eliminar'
                        size="sm"
                        click={ () => dispatch( removeCharacter(id) )}
                    />
                </div>
            </div>
        </div>
    )
}
