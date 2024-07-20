import { useState } from 'react'
import './App.css'
import cat from '../items.json'
import Farewell from './components/Farewell'

function Greeting({ name, age }) {
  return (
    <>
      <h1>Hello, {name}!</h1>
    </>
  )
}

function App() {
  
  return (
    <>
      <div>
        <h1 className=''>Hello, World!</h1>
        <Greeting cat={cat}  />
      </div>
    </>
  )
}

export default App
