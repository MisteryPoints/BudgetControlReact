import React, { useState, useEffect } from 'react'

const ControlPresupuesto = ({gastos, presupuesto, setPresupuesto}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, (0))
        const totalDisponible = presupuesto - totalGastado
        setGastado(totalGastado)
        setDisponible(totalDisponible)
    }, [gastos])

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
                    <span>Disponible:</span> {formatCurrency(disponible)}
                </p>

                <p>
                    <span>Gastado:</span> {formatCurrency(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto