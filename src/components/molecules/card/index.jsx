import React from 'react'
import { Typography } from '../../atoms/typography'
import { Button } from '../../atoms/button'
import { useDispatch, useSelector } from 'react-redux';
import { addHero, addVillains, removeHero, removeVillains } from '../../../actions/newCharacter';
import { useState } from 'react';
import { Modal } from '../modal';
import { removePreviewCharacter } from '../../../actions/searchCharacter';
import { setErrorAction } from '../../../actions/ui';

export const Card = ({character, preview, id, img, data }) => {

    const {powerstats, biography} = data
    const [openDetails, setOpenDetails] = useState(false)
    const {heroes, villains} = useSelector(state => state.character)
    
    const dispatch = useDispatch()

    const actionButton = (id) => {
        if (preview) {  
            if (heroes.map(object => object.id).includes(id) || villains.map(object => object.id).includes(id)) {
                dispatch( setErrorAction('EL personaje ya existe en el equipo') )
            } else {          
                if (data.biography.alignment === 'good') {
                    if (heroes.length < 3) {
                        dispatch( addHero(data) )
                        dispatch( removePreviewCharacter(id) )
                    } else {
                        dispatch( setErrorAction('Puedes agregar hasta 3 heroes') )
                    }
                } else if (data.biography.alignment === 'bad') {
                    dispatch( addVillains(data) )
                    dispatch( removePreviewCharacter(id) )
                } else {
                    dispatch( setErrorAction('Puedes agregar hasta 3 villanos') )
                }
            }
        } else {
            setOpenDetails( !openDetails )
        } 
    }

    const deleteCharacter = (id, alignment) => { 
        if (alignment === 'good') {
            dispatch( removeHero(id) )
        } else {
            dispatch( removeVillains(id) )
        }
    }

    return (
        <div className="card m-2 shadow rounded" 
            style={{
                maxWidth: "250px",
                maxHeight: preview ? "300px" : "500px",
            }}
        >
            { openDetails && 
                <Modal
                    details={data}
                    setOpenDetails={setOpenDetails}
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
                            actionButton(id)
                        }
                    />
                    {
                        !preview && (
                            <Button 
                                text='Eliminar'
                                size="sm"
                                click={ () => 
                                    deleteCharacter(id, data.biography.alignment)
                                }
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
