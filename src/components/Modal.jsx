import { useState } from 'react' 
import CerrarBtn from "../img/cerrar.svg"

const Modal = ({setModal, animarModal, setAnimarModal}) => {

  const [nombre, setNombre] = useState('')
    
  const ocultarModal = () => {
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img className="svg-hover" src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal}/>
        </div>
        <form className={`formulario ${animarModal ? "animar" : "cerrar"}`} >
            <legend >NUEVO GASTO</legend>
            <div className="campo">
              <label htmlFor="nombre">Nombre Gasto</label>
              <input type="text" id="nombre" placeholder="Añade un Nombre de Gasto"
              value={nombre} onChange={ e} />
            </div>
            <div className="campo">
              <label htmlFor="cantidad">Cantidad</label>
              <input type="number" id="cantidad" value={null}
              placeholder="Añade la cantidad del Gasto ej:300" />
            </div>
            <div className="campo">
              <label htmlFor="categoria">Categoría Gasto</label>
              <select id="categoria">
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