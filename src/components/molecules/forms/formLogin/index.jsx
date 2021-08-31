import React from 'react'
import { Input } from '../../../atoms/input';
import { Typography } from '../../../atoms/typography';
import './formLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const FormLogin = () => {
    return (
        <div className="row">
            <div className="col-12 p-4 shadow-lg rounded form">
                <form>
                    <Typography style="h5 p-2" text="Autenticarse" />
                    <Input type="email" placeholder="email@example.com" text="Email" />
                    <Input type="password" placeholder="Contraseña" text="Contraseña" />
                    <button className="btn btn-info">Iniciar sesión</button>
                </form>
            </div>
        </div>
    )
}
