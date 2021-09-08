import React from 'react'

export const Button = ({text, click, type, size, disabled, margin, handleModal }) => {
    return (
        <button 
            className={`btn btn-info ${margin} btn-${size} ${handleModal} `} 
            type={type}
            onClick={ click } 
            disabled={disabled}

        >
            { text }
        </button>
    )
}