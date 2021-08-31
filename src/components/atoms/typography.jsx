import React from 'react'

export const Typography = ({styles, text}) => {
    return (
        <p className={styles}>
            { text }
        </p>
    )
}
