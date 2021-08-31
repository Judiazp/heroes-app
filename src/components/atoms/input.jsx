import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Input = ({onChange, type, placeholder, margin}) => {
    return (
        <div className={`col-auto ${margin}`}>
            <input 
                type={type} 
                className="form-control" 
                placeholder={placeholder}
                onChange={onChange} 
            />
        </div>
    )
}
