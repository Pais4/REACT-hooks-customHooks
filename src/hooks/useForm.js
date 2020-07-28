import { useState } from "react"
/* EL ESTADO INICIAL VA A SER IGUAL A UN OBJETO VACIO, POR SI NO MANDA NADA
PARA QUE NO MARQUE UN ERROR */
export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState);

    /* PARA LIMPIAR EL FORMULARIO */
    const reset = () => {
        setValues( initialState )
    }

    const handleInputChange = ({ target }) => {
   
        setValues({
            ...values,
            [ target.name ]: target.value
        })

    }

    return [ values, handleInputChange, reset ];

}
