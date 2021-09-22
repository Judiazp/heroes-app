import React from 'react'
import { GridHero } from '../../organisms/Grid'

export const Team = ({listTeams, setListTeams}) => {

    const deleteTeam = (id) => {
        const newTeam = listTeams.filter(team => team.id !== id)
        setListTeams(newTeam)
    }

    return (
        <div
            className="row d-flex justify-content-center rounded mt-3 p-3" 
        >
            {
                listTeams.map(item => {
                    return (
                        <div 
                            className="col-12 col-xl-5 m-2 shadow"            
                        >
                            <GridHero 
                                nameTeam={ item.nameTeam }
                                team={item.team}
                                setTeam={item.setTeam}
                                key={item.id}
                                id={item.id}
                                deleteTeam={deleteTeam}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
