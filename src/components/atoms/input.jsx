import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Input = ({
    type, 
    placeholder, 
    margin, 
    name, 
    id, 
    onChange, 
    onBlur,
    value,
    touched,
    errors }) => {

    return (
        <div className={`col-auto ${margin}`}>
            <input 
                className={`form-control ${ errors && 'is-invalid' }`} 
                type={type} 
                placeholder={placeholder}
                onChange={onChange} 
                value={value}
                onBlur={onBlur}
                name={name}
                id={id}
            />
            {touched && errors ? (
               
                <p className="text-danger m-0" >
                    {errors}
                </p>

            ) : null}
        </div>
    )
}
