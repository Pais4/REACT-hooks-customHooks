import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        names: '',
        email: ''
    });

    const { names, email } = formState;

    /* EL USEEFFECT ES UN HOOK QUE NOS PERMITIRA EJECUTAR ALGUN
        EFECTO SECUNDARIO CUANDO ALGO SUCEDA EN NUESTROS COMPONENTES */
    useEffect( () => {
        // console.log('Hey');
    }, [] );

    useEffect( () => {
        // console.log('Form State cambio');
    }, [ formState ]);

    useEffect( () => {
        // console.log('Email cambio');
    }, [ email ]);

    const handleInputChange = ({ target }) => {
   
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })

    }

    return (
        <>
            <h1>Use Effect</h1>
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

            { (names === '123') && <Message />}

        </>
    )
}
