import React from 'react'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const SearchHero = () => {
    const formik = useFormik({
        initialValues: {
            hero: '',
        },
        validationSchema: Yup.object({
            hero: Yup.string().max(15,'Máximo 15 caracteres')
                .required('Campo requerido')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
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
            />
        </form>
    )
}
