import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const { counter1, counter2 } = counter;

    return (
        <>
            <h1>Counter { counter1 }</h1>
            <h1>Counter { counter2 }</h1>
            <hr />
            <button
                onClick={ () => {
                    setCounter({
                        /* UTILIZAMOS EL OPERADOR SPREAD PARA MANTENER EL RESTO DE PROPIEDADES COMO ESTAN */
                        /* SI NO HACEMOS ESTO LE CAEMOS ENCIMA AL ESTADO ANTERIOR Y MODIFICARIAMOS TODO */
                        ...counter,
                        counter1: counter1 + 1
                    })
                }}
                className="btn btn-primary"
            >
                +1
            </button>
        </>
    )
}
