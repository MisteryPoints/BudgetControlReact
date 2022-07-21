import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({gastos, setGastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {
          isValidPresupuesto ? (
            <div> 
              <ControlPresupuesto
                gastos={gastos} 
                setGastos={setGastos}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
              />
            </div>
          ): (
            <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              isValidPresupuesto={isValidPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
            /> 
          )
        }
          
    </header>
  )
}

export default Header