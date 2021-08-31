import React from 'react';
import { FormLogin } from '../../molecules/forms/formLogin';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {

    return (
        <div 
            className="container d-flex justify-content-center d-flex align-items-center" 
            style={{height: "100vh"}}
        >
            <FormLogin />
        </div>
    )
}
