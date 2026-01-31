import React from 'react'
import './rowStyle.css'

function FormRow({inputType, children}) {
    console.log(children);
  return (
    <div className='row'>
      <label>{children}</label>
      <input type={inputType} />
    </div>
  )
}

export default FormRow
