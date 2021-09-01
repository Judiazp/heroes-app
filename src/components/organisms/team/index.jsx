import React from 'react'
import { GridHero } from '../../organisms/Grid'

export const Team = () => {
    return (
        <div
            className="row d-flex justify-content-center rounded mt-3 p-3" 
        >
            {
                [1].map(item => {
                    return (
                        <div 
                            className="col-5 m-3 shadow"            
                        >
                            <GridHero characterType="hero" />
                        </div>

                    )
                })
            }
        </div>

    )
}
