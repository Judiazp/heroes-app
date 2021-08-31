import React from 'react'

export const Typography = ({style, text}) => {
    return (
        <p className={style}>
            { text }
        </p>
    )
}
