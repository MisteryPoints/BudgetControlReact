import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, setGastoEliminar}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? 'Gastos' : 'No hay Gastos aún'}</h2>

        {gastos.map(gasto =>(
            <Gasto key={gasto.id} gasto={gasto}
              setGastoEditar={setGastoEditar} 
              setGastoEliminar={setGastoEliminar}
            />
        ))}
    </div>
  )
}

export default ListadoGastos