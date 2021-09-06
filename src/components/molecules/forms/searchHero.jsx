import React from 'react'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export const SearchHero = ({team, setTeam}) => {

    const addHero = (data) => {
        if (data.results[0].biography.alignment === 'good') { 
            if (team.heros.length < 3) {
                setTeam({
                    ...team,
                    heros: [data, ...team.heros]
                })  
            } else {
                console.log('No puedes agregar mas de tres heroes');
            }
        }
        if (data.results[0].biography.alignment === 'bad') { 
            if (team.villains.length < 3) {
                setTeam({
                    ...team,
                    villains: [data, ...team.villains]
                })           
            } else {
                console.log('No puedes agregar mas de tres villanos');
            }
        }
    }

    const formik = useFormik({
        initialValues: {
            hero: '',
        },
        validationSchema: Yup.object({
            hero: Yup.string().max(15,'Máximo 15 caracteres')
                .required('Campo requerido')
        }),
        onSubmit: async values => {
            try {
                const {data} = await axios.get(`/api/103079892118789/search/${values.hero}`)
                addHero(data)
            } catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <form 
            onSubmit={formik.handleSubmit}
            className="d-flex m-3"
        >
            <Input 
                type="text" 
                placeholder="Busca un personaje"
                margin="me-3"
                name="hero"
                id="hero"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.hero}
                touched={formik.touched.hero}
                errors={formik.errors.hero}
            />
            <Button
                text="Buscar"
                size="sm"
                type="submit"
                // disabled={hero.data ? true : false}
            />
        </form>
    )
}
