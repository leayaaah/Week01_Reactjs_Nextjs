import React from 'react'
import './Button.css'

function Button({type, children}) {
  return (
    <div>
      <p className={type}> {children}</p>

    </div>
  )
}

export default Button