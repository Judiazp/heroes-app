import React from 'react'

export const Error = ({message}) => {
    return (
        <div class="alert alert-danger" role="alert">
            {message}
        </div>
    )
}
