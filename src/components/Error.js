import React from 'react'

export const Error = ({msj}) => {
  return (
    <div>
      <p className="alert alert-danger error" >Error: {msj}</p>
    </div>
  )
}
