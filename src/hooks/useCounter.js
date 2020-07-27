import { useState } from "react"

/* SI NO MANDA NADA EL VALOR INICIAL SERA DE 10 */
export const UseCounter = ( initialState = 10) => {
    
    const [state, setState] = useState( initialState )

    const increment = ( factor = 1 ) => {
        setState( state + factor );
    }

    const decrement = ( factor = 1 ) => {
        setState( state - factor );
    }

    const reset = () => {
        setState( initialState )
    }

    /* REGRESAMOS UN OBJETO QUE TENDRA EL STATE Y LAS FUNCIONES */
    return {
        state,
        increment, 
        decrement, 
        reset
    }

}


