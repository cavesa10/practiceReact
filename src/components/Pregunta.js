import React, { Fragment, useState} from "react";
import {Error} from '../components/Error'
import PropTypes from 'prop-types'

export const Pregunta = ({setPresupuesto, setRestante, setMostrarPregunta}) => {
  // Definir State
  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false)
   
  // Funcrion que lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true)
      return
    }
    // Si se pasa la validación
    setError(false)
    setPresupuesto(cantidad)
    setRestante(cantidad)
    setMostrarPregunta(false)

  }


  return (
    <Fragment>
      <h2>Añade tu presupuesto</h2>
      {error
        ? <Error msj="El presupuesto es incorrecto" />
        : null
      }
      <form onSubmit={handleSubmit} >
        <input
          type="number"
          className="u-full-width"
          placeholder="Ingrese su presupuesto"
          onChange= {definirPresupuesto}
          autoFocus
        />
        <input
          type="submit"
          className="u-full-width button-primary"
          value="Definir Presupuesto"
        />

      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  setPresupuesto : PropTypes.func.isRequired,
  setRestante :  PropTypes.func.isRequired,
  setMostrarPregunta : PropTypes.func.isRequired
}