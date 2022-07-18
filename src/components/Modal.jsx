import { useState } from 'react'
import Mensaje from './Mensaje' 
import CerrarBtn from "../img/cerrar.svg"

const Modal = ({setModal, animarModal, setAnimarModal}) => {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')

  const [mensaje, setMensaje] = useState('')
    
  const ocultarModal = () => {
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const handleSubmit= e => {
    e.preventDefault()

    if([nombre, cantidad, categoria].includes('')){
      setMensaje('Todos los campos son obligatorios')
    }
    setTimeout(() => {
      setMensaje('')
    }, 2000)
    return
  }

  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img className="svg-hover" src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal}/>
        </div>
        <form className={`formulario ${animarModal ? "animar" : "cerrar"}`} onSubmit={handleSubmit} >
            <legend >NUEVO GASTO</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}  
            <div className="campo">
              <label htmlFor="nombre">Nombre Gasto</label>
              <input type="text" id="nombre" placeholder="Añade un Nombre de Gasto"
              value={nombre} onChange={e => setNombre(e.target.value)} />
            </div>
            <div className="campo">
              <label htmlFor="cantidad">Cantidad</label>
              <input type="number" id="cantidad" value={cantidad}
              onChange={e => setCantidad(e.target.value)}
              placeholder="Añade la cantidad del Gasto ej:300" />
            </div>
            <div className="campo">
              <label htmlFor="categoria">Categoría Gasto</label>
              <select id="categoria"
              value={categoria} onChange={e => setCategoria(e.target.value)}>
                <option value="">-- Selleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Gastos en Comida</option>
                <option value="casa">Gastos del Hogar</option>
                <option value="gastos">Gastos Varios</option>
                <option value="ocio">Ocio</option>
                <option value="ahorro">Gastos en Salud</option>
                <option value="sucripciones">Suscripciones</option>
              </select>
            </div>  
            <input type="submit" value="Añadir Gasto"/> 
        </form>
    </div>
  )
}

export default Modal