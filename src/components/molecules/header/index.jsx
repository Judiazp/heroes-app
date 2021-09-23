import React from 'react'
import { Typography } from '../../atoms/typography';
import { Button } from '../../atoms/button';
import { useDispatch } from 'react-redux';
import { logout } from '../../../actions/auth';

export const Header = ({logueado}) => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch( logout() )
        localStorage.removeItem("acces-token")
    }

    return (
        <nav className="navbar navbar-light shadow" style={{background: "#FFFFFF"}}>
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <img 
                        src="https://media1.giphy.com/media/jmpmMqEAkvIzX7hstX/giphy.gif?cid=bba0826bepiakkfb3u69d0judbnl18fm2use6hwoqxc9p3pr&rid=giphy.gif&ct=g" 
                        alt="logo hero app" 
                        style={{ 
                            maxHeight: "40px",
                            borderRadius: "5px", 
                        }}
                        className="me-2"
                    />
                    <Typography styles="navbar-brand m-0 h1" text="HeroApp" />
                </div>
                { logueado && 
                    <Button 
                        text="Cerrar sesión"
                        click={() => handleLogout()} 
                    /> } 
            </div>
        </nav>
    )
}
