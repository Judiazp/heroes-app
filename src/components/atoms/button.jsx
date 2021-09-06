import React from 'react'

export const Button = ({text, click, type, size, disabled, margin }) => {
    return (
        <button 
            className={`btn btn-info ${margin} btn-${size}`} 
            type={type}
            onClick={ click } 
            disabled={disabled}

        >
            { text }
        </button>
    )
}