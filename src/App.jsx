import { useState, } from 'react'
import { createPortal } from 'react-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Child(props) {
  console.log(props)
  return(
    <div>
      <p>Hello</p>
      {props.children}
    </div>
  )
}
function App() {

  return (
    <div>
      <Child>World</Child>
    </div>
  )
}

export default App
