import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Input = ({onChange, type, placeholder}) => {
    return (
        <div className="col-auto mb-3">
            <input 
                type={type} 
                className="form-control" 
                id="inputPassword2" 
                placeholder={placeholder}
                onChange={onChange} 
            />
        </div>
    )
}
