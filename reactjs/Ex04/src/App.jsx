import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormRow from './component/FormRow'

function App() {
  return (
    <>
      <div className='container'>
      <FormRow inputType="text">Username
      </FormRow>
      <FormRow inputType="password">Password
      </FormRow>
      <button className='btn'>Login</button>
      </div>
    </>
  )
}

export default App
