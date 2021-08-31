import React from 'react'

export const Button = ({text, click, type}) => {
    return (
        <button 
            className="btn btn-info" 
            type={type}
            onClick={ click } 
        >
            { text }
        </button>
    )
}
