import { useState, useEffect } from 'react' 
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() { 
  const [gastos, setGastos] = useState([])
  
  const [presupuesto, setPresupuesto] = useState('')
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})
  const [gastoEliminar, setGastoEliminar] = useState({})

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 250)
    } 
  }, [gastoEditar])
  

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 250)
  }

  const guardarGasto = gasto => {
    if(gasto.id){
      //Editar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
    } else {
      //Nuevo Gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto]) 
    }
    
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 250)
  }

  return ( 
    <div className='scrollbar'>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto} 
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              setGastoEliminar={setGastoEliminar}
              />
          </main>
          <div className="nuevo-gasto">
            <img src={IconoNuevoGasto} alt="Icono Nuevo Gasto" className='svg-hover' onClick={handleNuevoGasto} />
          </div>
        </>
      )}
      
      {modal && 
      <Modal setModal={setModal} 
          animarModal={animarModal} 
          setAnimarModal={setAnimarModal} 
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
      />}

    </div>
  )
}

export default App
