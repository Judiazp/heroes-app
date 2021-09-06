import React, {useState, useEffect} from 'react'
import { Card } from '../../molecules/card'
import { Typography } from '../../atoms/typography'
import { Button } from '../../atoms/button'
import { SearchHero } from '../../molecules/forms/searchHero'

export const GridHero = ({ nameTeam, id }) => {
    
    const initialValueTeam = JSON.parse(localStorage.getItem(`team: ${id}`)) || {heros: [], villains: []}

    const [team, setTeam] = useState(initialValueTeam)

    useEffect(() => {
        localStorage.setItem(`team: ${id}`, JSON.stringify(team))
    }, [team])

    const teams = team.heros.concat(team.villains)

    return (
        <div className="row border ">
            <Typography 
                styles="h4 p-3 text-center"
                text={nameTeam} 
            />

            {
                teams.length < 6 &&
                    <SearchHero  
                        setTeam={setTeam}
                        team={team}
                    />
            }

            { teams.map(item => {
                console.log(item.results[0].id.toString());
                return(
                    <div className=" col-6">
                        <Card 
                            key={item.results[0].id}
                            character={item.results[0].name}
                            img={item.results[0].image.url}
                            orientation={item.results[0].biography.alignment}
                            methodAdd={(e) => {
                                e.preventDefault()
                                console.log('Viendo detalles');
                            }}
                            methodRemove={(e) => {
                                e.preventDefault()
                                console.log('Eliminando heroe');
                            }}
                        />
                    </div>
                )
            })}
            <div className="p-3 text-center">
                <Button text="Ver estadisticas del equipo" />
            </div>
        </div>
            
    )
}
