import React from 'react'
import { GridHero } from '../../organisms/Grid';
import { useSelector } from 'react-redux';

export const Team = () => {

    const { teams } = useSelector(state => state.team)

    return (
        <div
            className="row d-flex justify-content-center rounded mt-3 p-3" 
        >
            {
                teams.map(item => {
                    return (
                        <div 
                            className="col-12 col-xl-5 m-2 shadow"            
                        >
                            <GridHero 
                                nameTeam={ item.nameTeam }
                                key={`Team: ${item.id}`}
                                // deleteTeam={deleteTeam}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
