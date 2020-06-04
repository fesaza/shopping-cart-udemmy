import React from 'react'

const FechaLanzamiento = ({cuentaRegresiva}) => {
    return (
        <div>Fecha de Lanzamiento: {cuentaRegresiva.toLocaleString()}</div>
    )
}

export default FechaLanzamiento
