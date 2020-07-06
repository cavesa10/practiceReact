import React, {useState} from 'react'
import {Error} from '../components/Error'
import shortid from 'shortid'

export const Formulario = ({agregarNuevoGasto}) => {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false)

//  Cuando el usuario agrega un gasto
  const handleSubmit = e => {
    e.preventDefault()
    // Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '' ) {
      setError(true)
      return
    }
    setError(false)

    // Construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }

    // pasar el gasto al componente principal
    agregarNuevoGasto(gasto)

    // resetear formulario
    setNombre('')
    setCantidad(0)

  }

  return(
    
    <form 
      onSubmit={handleSubmit}
    > 
      <h2>Agrega tus gastos aquí</h2>
      {error
        ? <Error msj="Error en los datos del formulario" />
        : null
      }
      <div className="campo">
        <label htmlFor="nombreGasto">Nombre Gasto</label>
        <input 
          name="nombreGasto"
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          autoFocus
        />
      </div>
      <div className="campo">
        <label htmlFor="nombreGasto">Cantidad Gasto</label>
        <input 
          type="number"
          name="nombreGasto"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={e => setCantidad(parseInt(e.target.value, 10))}
          
        />
      </div>
      
      <input type="submit"
        className="button-primary u-full-width"
        value="Agragar Gasto"
      />
    </form>
  )
}