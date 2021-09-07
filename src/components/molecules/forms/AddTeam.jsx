import React from 'react'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'
// import { Card } from '../card'
import { Typography } from '../../atoms/typography'
import { useFormik } from 'formik';
// import { SearchHero } from './searchHero'
import * as Yup from 'yup';

export const AddTeam = ({ setListTeams, listTeams}) => {

    // const [error, setError] = useState(false)

    const addTeam = (nameTeam) => {
        const newTeam = {
            nameTeam,
            id: listTeams.length
        }
        setListTeams([
            newTeam,
            ...listTeams
        ])
    }    
    const formik = useFormik({
        initialValues: {
            nameTeam: '',
        },
        validationSchema: Yup.object({
            nameTeam: Yup.string().max(15,'Máximo 15 caracteres')
                .required('Campo requerido'),
        }),
        onSubmit: values => {
            addTeam(values.nameTeam)  
        }
    })
    //https://www.youtube.com/watch?v=AXzuRJhAu_s rutas privadas

    return (
        <div className="row mt-5 d-flex flex-column justify-content-center align-items-center">
            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                <Typography
                    styles="h4 mt-3 mb-3"
                    text="Crea un equipo"
                />
                <form 
                    style={{height: "100%"}}
                    className="d-flex rounded p-3 align-items-center "
                    onSubmit={formik.handleSubmit}
                >
                    <Input 
                        type="text" 
                        placeholder="Nombre del equipo"
                        margin="m-3"
                        name="nameTeam"
                        id="nameTeam"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nameTeam}
                        touched={formik.touched.nameTeam}
                        errors={formik.errors.nameTeam}
                    />
                    <Button
                        text="Crear equipo"
                        margin="m-3"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    )
}
