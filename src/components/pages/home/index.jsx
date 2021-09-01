import React from 'react'
import { Header } from '../../molecules/header'
import { SearchHero } from '../../molecules/forms/searchHero'
import { Team } from '../../organisms/team'

export const Home = () => {
    return (
        <div>
            <Header logueado={true} />
            <div 
                className="container-fluid"
                style={{minHeight: "calc(100vh - 70px)"}}    
            >
                <SearchHero />
                <Team />
            </div>
        </div>
    )
}
