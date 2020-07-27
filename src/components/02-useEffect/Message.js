import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 })

    const { x, y } = coords

    /* EL RETURN ES LA LIMPIEZA QUE SE REALIZA CUANDO EL COMPONENTE SE
    DESMONTA, EN ESE PROCESO DE LIMPIEZA SE PODRIA HACER CANCELACION DE
    SUSCRIPCIONES, ENTRO OTRAS COSAS. */
    useEffect(() => {
        
        /* LO PONEMOS EN UNA FUNCION INDEPENDIENTE PARA PODER
        REMOVERLO CUANDO SE DESMONTE EL COMPONENTE */
        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y }
            setCoords( coors );
        }

        // window.addEventListener('mousemove', (e) => {
        //     // console.log(e);
        //     const coors = { x: e.x, y: e.y }
        //     console.log(coors);
        // })

        /* AHORA EN VEZ DE MANDAR EL CALLBACK MANDAMOS LA FUNCION QUE DEFINIMOS */
        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x: { x } y: { y }
            </p>
        </div>
    )
}
