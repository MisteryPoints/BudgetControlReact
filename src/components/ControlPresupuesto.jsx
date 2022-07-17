import React from 'react'

const ControlPresupuesto = ({presupuesto, setPresupuesto}) => {

    const formatCurrency = (cantidad) => {
        return  cantidad.toLocaleString('es-DO', {
                style: 'currency',
                currency: 'DOP'
    })}

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <p>Grafica Aqui</p>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto:</span> {formatCurrency(presupuesto)}
                </p>

                <p>
                    <span>Disponible:</span> {formatCurrency(0)}
                </p>

                <p>
                    <span>Gastado:</span> {formatCurrency(0)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto