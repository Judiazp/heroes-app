import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../actions/modal'

export const AddButton = () => {
    
    const dispatch = useDispatch()
    
    return (
        <button 
            onClick={ () => dispatch( openModal(true) ) }
            className="
                d-flex 
                btn 
                btn-secondary 
                justify-content-center 
                text-center 
                card 
                m-2 
                shadow 
                rounded 
                alert-secondary
            "
            style={{
                width: "250px",
                height: '500px',
            }}
        >
            <h1>Agregar</h1>
        </button>
    )
}
