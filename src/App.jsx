import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'


function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Productos ..."/>
      
    </>
  )
}

export default App
