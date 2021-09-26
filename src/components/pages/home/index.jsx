import React, { useEffect } from 'react'
import { Header } from '../../molecules/header'
import { SearchHero } from '../../molecules/forms/searchHero'
import { useSelector } from 'react-redux'
import { GridHero } from '../../organisms/Grid'

export const Home = () => {

    const {characters} = useSelector(state => state.character)

    useEffect(() => {
        localStorage.setItem('team', JSON.stringify(characters))
    }, [characters])


    return (
        <div style={{ backgroundColor: '#F1F1F9' }}>
            <Header logueado={true} />
            <div 
                className="container-fluid"
                style={{minHeight: "calc(100vh - 120px)"}}    
            >
                <SearchHero/>
                <GridHero array={characters} />
            </div>
        </div>
    )
}