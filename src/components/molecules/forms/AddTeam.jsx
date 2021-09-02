import React from 'react'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'
import { Card } from '../card'
import { Typography } from '../../atoms/typography'
import { useFormik } from 'formik';
import { SearchHero } from './searchHero'
import * as Yup from 'yup';

export const AddTeam = () => {

    const formik = useFormik({
        initialValues: {
            nameTeam: '',
        },
        validationSchema: Yup.object({
            nameTeam: Yup.string().max(15,'Máximo 15 caracteres')
                .required('Campo requerido'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <div className="row mt-5 d-flex flex-column justify-content-center align-items-center">
            <div className="col-4 d-flex flex-column shadow justify-content-center align-items-center">
                <Typography
                    styles="h4 mt-3 mb-3"
                    text="Crea un equipo"
                />
                <SearchHero />
                <Card 
                    character="Super woman"
                    preview={true}
                    methodAdd={ (e) => {
                        e.preventDefault()
                        console.log('Agregando heroe');
                    } }
                    methodRemove={(e) => {
                        e.preventDefault()
                        console.log('Quitando heroe');
                    }}
                />
                <form 
                    style={{height: "100%"}}
                    className="d-flex flex-column rounded pb-3 align-items-center "
                    onSubmit={formik.handleSubmit}
                >
                    <Input 
                        type="text" 
                        placeholder="Nombre del equipo"
                        margin="mb-2 mt-3"
                        name="nameTeam"
                        id="nameTeam"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nameTeam}
                        touched={formik.touched.nameTeam}
                        errors={formik.errors.nameTeam}
                    />
                    
                    <div className="mt-3" >
                        <Typography text="Has agregado x heroes y x villanos" />
                    </div>
                    <Button
                        text="Crear equipo"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    )
}
