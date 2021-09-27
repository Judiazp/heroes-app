import React, { useEffect } from 'react'
import { Header } from '../../molecules/header'
import { SearchHero } from '../../molecules/forms/searchHero'
import { useSelector } from 'react-redux'
import { GridHero } from '../../organisms/Grid'
import { AddButton } from '../../atoms/addButton'
import { PowerstatsTeam } from '../../molecules/powerstatsTeam'
import './home.css'

export const Home = () => {

    const {villains, heroes} = useSelector(state => state.character)
    const {character} = useSelector(state => state)
    const { open } = useSelector(state => state.modal)

    const listCharacters = heroes.concat(villains)

    useEffect(() => {
        localStorage.setItem('team', JSON.stringify(character))
    }, [character])

    return (
        <div style={{ height: '100vh'}}>
            <Header logueado={true} />
            <div className="content">
                { open && <SearchHero/> }
                <div className='content-characters'>
                    <div 
                        className="d-flex flex-wrap justify-content-center"
                        style={{height: "100%" }}    
                    >
                        {
                            listCharacters.length < 6 &&
                            <div>
                                <AddButton />
                            </div>
                        }
                        <GridHero array={listCharacters} />
                    </div>
                    <PowerstatsTeam />
                </div>
            </div>
        </div>
    )
}