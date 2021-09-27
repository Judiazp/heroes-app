import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'
import { Error } from '../../atoms/error';
import { startAddPreview } from '../../../actions/searchCharacter';
import { GridHero } from '../../organisms/Grid';
import { closedModal } from '../../../actions/modal';
import './forms.css'

export const SearchHero = () => {

    const dispatch = useDispatch()
    const {error, loading, msgError} = useSelector(state => state.ui)
    const searchCharacter = useSelector(state => state.searchCharacter)
    const {villains, heroes} = useSelector(state => state.character)
    
    const listCharacters = villains.concat(heroes)

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
        <>
            { listCharacters.length < 6 &&
                <div className="content-preview-modal">
                    <form 
                        onSubmit={formik.handleSubmit}
                        className="preview-modal"
                    >
                        <div>
                            <div
                                className="btn btn-danger"
                                onClick={
                                    () => {
                                        dispatch( closedModal() )
                                    }
                                }
                            >
                                x
                            </div>
                        </div>
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
                        <div 
                            className="d-flex justify-content-center"
                        >
                            <GridHero array={searchCharacter} preview={true} />
                        </div>


                    </form>                   
                </div>
            }    
                
        </>
    )

}
