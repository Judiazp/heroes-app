import React, {useContext} from 'react'
import { Typography } from '../../atoms/typography'
import { Button } from '../../atoms/button'
import { Modal } from '../modal'
import { AuthContext } from '../../../context/auth/auth'

export const Card = ({ character, id, img, data, deleteHero }) => {

    const {openModal, toggleModal} = useContext(AuthContext)    

    const {powerstats} = data

    return (
        <div className="card m-1" style={{maxWidth: "400px"}}>
            { openModal && 
                <Modal
                    openModal={openModal} 
                    details={data}
                />
            }
            <div className="row g-0">
                <div className="col-12 col-md-4">
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
                <div className="col-12 col-md-8 d-flex align-items-center">
                    <div className="card-body">
                        <Typography styles="card-title" text={`Heroe: ${character}`}/>
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
                        <div className="d-flex  justify-content-around">
                            <Button 
                                text='Detalles'
                                size="sm"
                                click={ (e) =>
                                    toggleModal()
                                }
                            />
                            <Button 
                                text='Eliminar'
                                size="sm"
                                click={ () => deleteHero(id)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
