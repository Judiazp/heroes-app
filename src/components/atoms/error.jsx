import React from 'react'

export const Error = ({message}) => {
    return (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
    )
}
