import React from 'react'

export const Button = ({text, click, type, size}) => {
    return (
        <button 
            className={`btn btn-info btn-${size}`} 
            type={type}
            onClick={ click } 
        >
            { text }
        </button>
    )
}
