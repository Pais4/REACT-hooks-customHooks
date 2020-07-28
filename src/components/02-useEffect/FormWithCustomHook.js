import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css'

export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        names: '',
        email: '',
        password: ''
    });

    const { names, email, password } = formValues;

    useEffect( () => {
        console.log('Email cambio')
    }, [ email ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="names"
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                    autoComplete="off"
                    value= { names }
                    onChange= { handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Ingresa tu email"
                    autoComplete="off"
                    value= { email }
                    onChange= { handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Ingresa tu contraseña"
                    value= { password }
                    onChange= { handleInputChange }
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary"
            >
                Guardar
            </button>

        </form>
    )
}
