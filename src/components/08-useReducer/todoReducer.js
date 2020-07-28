
export const todoReducer =  (state = [], action ) => {

    /* LA MAYOR PARTE DE LAS VECES SE TRABAJA CON UN SWITCH */
    switch ( action.type ) {

        /* NO HACE FALTA EL BREAK POR QUE VAMOS A HACER EL RETURN DE UN NUEVO STATE */
        case 'add':
            return [ ...state, action.payload ];

        /* EL FILTER REGRESA UN NUEVO ARREGLO CONTODOS LOS ELEMENTOS 
        QUE CUMPLAN UNA CONDICION */
        case 'delete':
            return state.filter( todo => todo.id !== action.payload );

        case 'toggle':
            return state.map( todo => 
                ( todo.id === action.payload)
                ? { ...todo, done: !todo.done }
                : todo
                )

        /* ESTE SERIA EL CASO LARGO APLICANDO LA MISMA LOGICA DE ARRIBA */
        case 'toggle-largo':
            return state.map( todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            });
    
        default:
            return state;
    }

}