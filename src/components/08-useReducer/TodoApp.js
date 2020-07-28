import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';

import './styles.css';

const init = () => {

    /* COMO ESTO PUEDE REGRESAR NULL ENTONCES USAMOS EL || (OR) PARA RETORNAR UN ARREGLO VACIO*/
    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {

    /* ARRAY DESTRUCTURING */
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    /* USAREMOS UN EFFECT PARA QUE CADA QUE LOS TODOS CAMBIEN SE ALMACENEN EN EL LOCALSTORAGE */
    /* COMO EL LOCALSTORAGE SOLO GUARDA STRING, USAREMOS EL JSON.STRINGIFY PARA CONVERTIR LOS 
    OBJETOS EN UN JSON QUE SEA UN STRING */
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ) )
    }, [ todos ])

    const handleDelete = (todoId) => {
        
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);

    }

    const handleToggle = ( todoId ) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });

    }

    return (
        <div>

            <h1>Todo App ( { todos.length } ) </h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <TodoList 
                        todos={ todos } 
                        handleToggle={ handleToggle } 
                        handleDelete={ handleDelete }
                    />

                </div>

                <div className="col-5">

                    <TodoAdd 
                        handleAddTodo= { handleAddTodo }
                    />

                </div>
            </div>

        </div>
    )
}

/* USE REDUCER */
/*
 * DISPATCH -> Me ayudara a disparar las acciones hacia mi reducer
 * INIT -> Le ayuda a react a computar todo el estado inicial para que funcione mas rapido
 * y que algunas funciones no se ejecuten repetidamente cada que hay algunos cambios.
 * La funcion INIT se llama y lo que sea que retorne sera el initialState
 */