import React from 'react'
import { GridHero } from '../../organisms/Grid'

export const Team = ({listTeams}) => {

    return (
        <div
            className="row d-flex justify-content-center rounded mt-3 p-3" 
        >
            {
                listTeams.map(item => {
                    return (
                        <div 
                            className="col-5 m-3 shadow"            
                        >
                            <GridHero 
                                nameTeam={ item.nameTeam }
                                team={item.team}
                                setTeam={item.setTeam}
                                key={item.id}
                                id={item.id}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
