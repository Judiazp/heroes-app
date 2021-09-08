import React from 'react'
import { Button } from '../../atoms/button';
import { Typography } from '../../atoms/typography';
import { Input } from '../../atoms/input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useContext } from "react"
import { AuthContext } from '../../../context/auth/auth';

export const FormLogin = () => {

    const {setAuthToken} = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email inválido').required('Campo requerido'),
            password: Yup.string().required('Campo requerido')
        }),
        onSubmit: values => {
            axios({
                method: 'POST',
                url: 'http://challenge-react.alkemy.org/',
                data: values
            }).then(({data}) => {
                const {token} = data
                setAuthToken(token)
            })
            .catch(error => console.log(error))
        }
    })

    return (
        <div className="col-12 p-4 shadow-lg rounded-3">
            <form 
                className="d-flex flex-column" 
                style={{
                    background: "#FFFFFF",
                }}
                onSubmit={formik.handleSubmit}
            >
                <Typography 
                    styles="h5 p-2" 
                    text="Autenticarse" 
                />
                <Input 
                    type="email" 
                    placeholder="email@example.com" 
                    margin="mb-3"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    touched={formik.touched.email}
                    errors={formik.errors.email}
                />
                <Input 
                    type="password" 
                    placeholder="Contraseña" 
                    margin="mb-3"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    touched={formik.touched.password}
                    errors={formik.errors.password}
                />
                <Button 
                    text="Iniciar sesión" 
                    type="submit" 
                />
            </form>
        </div>
    )
}
