import React from 'react'
import { Input } from '../../../atoms/input';
import { Typography } from '../../../atoms/typography';
import { Button } from '../../../atoms/button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const FormLogin = () => {
    return (
        <div className="row">
            <div className="col-12 p-4 shadow-lg rounded-3 form">
                <form 
                    className="d-flex flex-column" 
                    style={{background: "#FFFFFF"}}
                >
                    <Typography 
                        styles="h5 p-2" 
                        text="Autenticarse" 
                    />
                    <Input 
                        type="email" 
                        placeholder="email@example.com" 
                        text="Email" 
                        margin="mb-3"
                    />
                    <Input 
                        type="password" 
                        placeholder="Contraseña" 
                        text="Contraseña"
                        margin="mb-3"
                    />
                    <Button 
                        text="Iniciar sesión" 
                        type="submit" 
                    />
                </form>
            </div>
        </div>
    )
}
