import React, { useEffect, useState } from 'react'
import { Header } from '../../molecules/header'
import { AddTeam } from '../../molecules/forms/AddTeam'
import { Team } from '../../organisms/team'

export const Home = () => {

    const initialValueRecords = JSON.parse(localStorage.getItem('listTeam')) || []
    const [listTeams, setListTeams] = useState(initialValueRecords)

    useEffect(() => {
        localStorage.setItem('listTeam', JSON.stringify(listTeams))
    }, [listTeams])

    console.log(listTeams);

    return (
        <div>
            <Header logueado={true} />
            <div 
                className="container-fluid"
                style={{minHeight: "calc(100vh - 70px)"}}    
            >
                <AddTeam 
                    setListTeams={setListTeams} 
                    listTeams={listTeams}
                />
                <Team 
                    listTeams={listTeams}
                />
            </div>
        </div>
    )
}