import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'
import { Error } from '../../atoms/error';
import { startAddPreview } from '../../../actions/newHero';
import { Typography } from '../../atoms/typography';
import { GridHero } from '../../organisms/Grid';
import './forms.css'

export const SearchHero = () => {

    const dispatch = useDispatch()
    const {error, loading, msgError} = useSelector(state => state.ui)
    const {characters, previewCharacter} = useSelector(state => state.character)

    const formik = useFormik({
        initialValues: {
            hero: '',
        },
        validationSchema: Yup.object({
            hero: Yup.string().max(15,'Máximo 15 caracteres')
                .required('Campo requerido')
        }),
        onSubmit: values => {
            dispatch( startAddPreview(values.hero) )
            formik.resetForm()
        }
    })

    return (
        <div>
            { characters.length < 6 ?
                <form 
                    onSubmit={formik.handleSubmit}
                    className="d-flex flex-column mt-5  mb-5 shadow w-25 m-auto p-4"
                >
                    <div className="d-flex mb-3 m-auto">
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
                                disabled={loading}
                            />
                        </div>
                    </div>    

                    {
                        error && (
                            <div className="text-center">
                                <Error message={`${msgError}`} />
                            </div>
                        )
                    }
                </form>

                : <div className="d-flex alert-success justify-content-center mt-5 mb-5 col-12 shadow w-25 m-auto p-4">
                    <Typography 
                        text="Equipo completaado"
                        styles="h2"
                    />
                </div> 
            }

            <div 
                className="w-50 m-auto p-3"
            >
                <GridHero array={previewCharacter} preview={true} />
            </div> 
               
        </div>
    )
}
