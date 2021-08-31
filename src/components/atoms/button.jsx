import React from 'react'

export const Button = ({text, click, type}) => {
    return (
        <button 
            className="btn btn-info btn-sm" 
            type={type}
            onClick={ click } 
        >
            { text }
        </button>
    )
}
