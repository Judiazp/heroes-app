import React from 'react'
import { Header } from '../../molecules/header'
import { SearchHero } from '../../molecules/forms/searchHero'
import { GridHero } from '../../organisms/Grid'

export const Home = () => {
    return (
        <div>
            <Header logueado={true} />
            <div 
                className="container"
                style={{minHeight: "calc(100vh - 70px)"}}    
            >
                <SearchHero />
                
                <div className="row">
                    <div className="col-6 border">
                        <GridHero characterType="hero" />
                    </div>
                    <div className="col-6 border">
                        <GridHero characterType="villain" />
                    </div>
                </div>
            </div>
        </div>
    )
}
