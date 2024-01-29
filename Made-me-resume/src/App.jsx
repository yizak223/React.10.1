import { useState } from 'react'
import './App.css'
import NavBar from './component/navBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import MadeMeResume from './pages/madeResume'
import Authentication from './pages/authentication'
import UserResume from './pages/userResume'
import BigResume from './component/savedResumes/BigResume'
import { useContext } from "react";
import { UserContext } from "../src/context/User";
function App() {
  const { user } = useContext(UserContext)
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MadeMeResume" element={<MadeMeResume />} />
          <Route path='UserResume' element={<UserResume/> } />
          <Route path='UserResume/:ResumeId' element={<BigResume/> } />
          {!user ? <Route path="/Authentication" element={
            <Authentication />} /> : null}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
