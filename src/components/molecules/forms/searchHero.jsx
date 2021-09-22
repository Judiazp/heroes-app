import React, { useContext } from 'react'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { AuthContext } from '../../../context/auth/auth';
import { Error } from '../../atoms/error';

export const SearchHero = ({team, setTeam}) => {

    const {error, setError} = useContext(AuthContext)

    const addHero = (data) => {
        if (team.map(hero => hero.id).includes(data.id)) {
            setError(!error)
        } else {
            setError(false)
            setTeam([
                data,
                ...team
            ])           
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
                addHero(data.results[0])
            } catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <div>

            <form 
                onSubmit={formik.handleSubmit}
                className="d-flex justify-content-center m-3 col-12"
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
                <div>
                    <Button
                        text="Buscar"
                        size="sm"
                        type="submit"
                    />
                </div>
            </form>
            {
                error && (
                    <div className="w-50 text-center m-auto">
                        <Error message="El héroe ya existe" />
                    </div>
                )
            }
        </div>
    )
}
