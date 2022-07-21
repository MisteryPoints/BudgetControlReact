import { useEffect, useState } from "react"; 

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
        <form>
            <div className="campo">
                <label>Filtrar Gastos</label>
                <select value={filtro} onChange={e => setFiltro(e.target.value)}>
                    <option value="">-- Todas las Categorías --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Gastos en Comida</option>
                    <option value="casa">Gastos del Hogar</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Gastos en Salud</option>
                    <option value="sucripciones">Suscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros