import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/navBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import MadeMeResume from './pages/madeResume'
import Authentication from './pages/authentication'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MadeMeResume" element={<MadeMeResume />} />
          <Route path="/Authentication" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
