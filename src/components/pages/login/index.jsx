import React from 'react';
import { FormLogin } from '../../molecules/forms/formLogin';
import { Header } from '../../molecules/header';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {

    return (
        <>
            <Header />
            <div 
                className="container d-flex justify-content-center align-items-center" 
                style={{height: "calc(100vh - 70px)"}}
            >
                <div className="col-4">
                    <FormLogin />
                </div>
            </div>
        </>
    )
}
