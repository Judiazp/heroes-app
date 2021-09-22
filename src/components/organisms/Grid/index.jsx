import React, {useState, useEffect} from 'react'
import { Card } from '../../molecules/card'
import { Typography } from '../../atoms/typography'
import { Button } from '../../atoms/button'
import { SearchHero } from '../../molecules/forms/searchHero'

export const GridHero = ({ nameTeam, id, deleteTeam }) => {
    
    const initialValueTeam = JSON.parse(localStorage.getItem(`team: ${id}`)) || []
    const [team, setTeam] = useState(initialValueTeam)

    useEffect(() => {
        localStorage.setItem(`team: ${id}`, JSON.stringify(team))  
    }, [team, id])

    const deleteHero = (id) => {
        const newHeros = team.filter(hero => hero.id !== id)
        setTeam(newHeros)
    }
    
    let powerHero = 0
    let powerTeam = 0

    team.forEach(hero => {
        const { intelligence, strength, speed, durability, power, combat } = hero.powerstats
        powerHero = parseInt(intelligence) + parseInt(strength) + parseInt(speed) + parseInt(durability) + parseInt(power) + parseInt(combat)
        powerTeam += powerHero
    })
    
    return (
        <div className="row d-lex justify-content-center ">  
            <Typography 
                styles="h4 mt-4 text-center"
                text={`Equipo: ${nameTeam}.`} 
            />
            { team.length < 6 &&
                <SearchHero  
                    setTeam={setTeam}
                    team={team}
                />
            }
            { team.map(item => {
                return(
                    <div className="d-flex justify-content-center col-12 col-md-6 col-xl-6">
                        <Card 
                            key={item.id}
                            id={item.id}
                            character={item.name}
                            powerstats={item.powerstats}
                            data={item}
                            img={item.image.url}
                            deleteHero={deleteHero}
                        />
                    </div>
                )
            })}
            <Typography 
                styles="h4 mt-4 text-center"
                text={`Poder del equipo: ${powerTeam}`} 
            />
            <div className="col-12 mb-3 mt-3 d-flex justify-content-center">
                <Button 
                    text="Eliminar equipo"
                    click={() => {
                        localStorage.removeItem(`team: ${id}`)
                        deleteTeam(id)
                    }}
                />
            </div>
        </div>
            
    )
}
