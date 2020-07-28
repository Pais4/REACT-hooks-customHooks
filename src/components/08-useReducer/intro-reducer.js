
/* ESTADO INICIAL */
const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}]

/* PRIMER REDUCER */
/* AL REDUCER USUALMENTE SE LE VA A MANDAR EL STATE Y UNA ACCION */
/* LAS ACCIONES SON LAS QUE VAN A MODIFICAR EL STATE */
const todoReducer = ( state = initialState, action ) => {

    /* PARA PROCESAR LA ACCION QUE IMPLEMENTAMOS ABAJO */
    /* ? -> SI EL ACTION TIENE ALGUN VALOR Q HAGA ALGO, SINO QUE NO HAGA NADA */
    if ( action?.type === 'agregar' ) {
        return [ ...state, action.payload ]
    }

    /* REGRESA UN NUEVO ESTADO */
    /* AUNQUE NO SE HAGA NADA, SIEMPRE SE DEBE REGRESAR UN STATE */
    return state;

}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Aprender Python',
    done: false
}

const agregarTodoAction = {
    /* ES UN ESTANDAR QUE TENGA UNA PROPIEDAD LLAMADA TYPE */
    type: 'agregar',
    /* ES OTRO ESTANDAR QUE SE LLAME ASI YA QUE OTROS DESARROLLADORES CUANDO QUIERAN TRABAJAR CON LA ACCION YA SABEN
    QUE VIENE EN EL PAYLOAD - ES OPCIONAL */
    payload: newTodo
}

todos = todoReducer( todos, agregarTodoAction);

console.log(todos);

