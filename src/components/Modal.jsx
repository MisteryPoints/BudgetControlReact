import CerrarBtn from "../img/cerrar.svg"

const Modal = ({setModal}) => {

    const ocultarModal = () => {
        setModal(false);
    }

  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img className="svg-hover" src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal}/>
            <form ></form>
        </div>
    </div>
  )
}

export default Modal