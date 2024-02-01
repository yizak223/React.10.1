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
import { FormDataProvider } from './context/FormData'

function App() {
  const { user } = useContext(UserContext)
  const [path, setPath] = useState();

  return (
    <>
      <BrowserRouter>
        <NavBar path={path} setPath={setPath} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MadeMeResume" element={
            <FormDataProvider>
              <MadeMeResume />
            </FormDataProvider>
          } />
          <Route path='/UserResume' element={<UserResume />} />
          <Route  path='/UserResume/:ResumeId' element={<BigResume setPath={setPath}/>} />
          {!user ? <Route path="/Authentication" element={
            <Authentication />} /> : null}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
