import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import NavbarComponent from "./component/Navbar";
import HomePage from './pages/Homepage';

function App() {
  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
      
    </>
  )
}

export default App
