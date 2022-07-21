import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({gastos, setGastos, presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [porcentaje, setPorcenaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, (0))
        const totalDisponible = presupuesto - totalGastado

        //Calculo Porcentaje
        const nuevoPorcentaje = ((totalGastado / presupuesto) * 100)

        setGastado(totalGastado)
        setDisponible(totalDisponible)
        setTimeout(() => {
            setPorcenaje(nuevoPorcentaje)
        }, 500);
    }, [gastos])

    const formatCurrency = (cantidad) => {
        return  cantidad.toLocaleString('es-DO', {
                style: 'currency',
                currency: 'DOP'
    })}

    const handleResetApp = () => {
        const resultado = confirm('¿Deseas reiniciar tu presupuesto y gastos?')

        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'
                    })}
                    value = {porcentaje}
                    text = {`${porcentaje.toFixed(2)}% Gastado`}
                />
            </div>
            <div className='contenido-presupuesto'>
                <button className='reset-app' type='button' onClick={handleResetApp}>
                    Resetear APP
                </button>
                <p>
                    <span>Presupuesto:</span> {formatCurrency(presupuesto)}
                </p>

                <p className={(disponible > 0) ? '' : 'negativo'}>
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