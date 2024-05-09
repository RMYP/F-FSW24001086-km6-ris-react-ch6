import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import NavbarComponent from "./component/Navbar";
import HomePage from './pages/Homepage';
import CarSearchPage from './pages/SearchPage';
import {FetchCarData} from './http';

function App() {
  return (
    <>
      <NavbarComponent/>
        <FetchCarData>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/cars' element={<CarSearchPage/>} />
          </Routes>
      </FetchCarData>
    </>
  )
}

export default App
