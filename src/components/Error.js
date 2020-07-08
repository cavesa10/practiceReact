import React from 'react'
import PropTypes from 'prop-types'

export const Error = ({msj}) => {
  return (
    <div>
      <p className="alert alert-danger error" >Error: {msj}</p>
    </div>
  )
}

Error.propTypes = {
  msj: PropTypes.string.isRequired
}