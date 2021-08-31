import React from 'react'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'

export const SearchHero = () => {
    return (
        <div 
            className="row mt-5"
        >
            <div className="col-12 border d-flex justify-content-center align-items-center">
                <form 
                    style={{height: "100%"}}
                    className="d-flex align-items-center m-3"
                >
                    <Input 
                        type="text" 
                        placeholder="Busca un héroe"
                        margin="me-3"
                    />
                    <Button
                        text="Buscar"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    )
}
