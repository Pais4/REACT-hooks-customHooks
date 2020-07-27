import React from 'react';
import { UseCounter } from '../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    /* DESESTRUCTURAMOS LO QUE ME ENVIA EL CUSTOM HOOK */
    const { state, increment, decrement, reset } = UseCounter(100);

    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => { increment(5) } }
            >
                +1
            </button>

            <button 
                className="btn btn-primary"
                onClick={ reset }
            >
                Reset
            </button>

            <button 
                className="btn btn-primary"
                onClick={ () => { decrement(10) } }
            >
                -1
            </button>
        </>
    )
}
