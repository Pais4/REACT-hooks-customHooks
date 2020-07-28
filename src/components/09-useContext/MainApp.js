import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({})

    return (
        <UserContext.Provider value={{ 
            user,
            setUser
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}

/* ANOTACIONES */
/*
 * Context -> El context es un higher order component, por lo tanto debe ir 
 * por encima de el resto de los componentes.
 * 
 * Cuando el context es modificado, este notifica a todos los hijos acerca del 
 * respectivo cambio
 */
