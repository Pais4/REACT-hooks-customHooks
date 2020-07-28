import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    /* AQUI ES DONDE DEBEMOS MANEJAR EL FORMULARIO */

     /* HACEMOS DESESTRUCTURACION DE ARREGLOS */
    /* COMO SOLO ES UN OBJETO EL QUE ENVIAREMOS PODEMOS APLICAR OBJECT DESTRUCTURING */
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {

        e.preventDefault();

        /* VALIDACION PARA VER SI TIENE ALGO EL FORMULARIO */
        if( description.trim().length <= 1  ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo( newTodo );

        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={ handleSubmit }>

                <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder= "Aprender ..."
                    onChange={ handleInputChange }
                    value={ description }
                    autoComplete="off"
                />

                <button
                            className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>

            </form>
        </>
    )
}
