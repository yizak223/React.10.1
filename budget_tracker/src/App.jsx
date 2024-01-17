import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BudgetCard from './components/BudgetCard'
import BudgetTracker from './pages/BudgetTracker'
import Home from './pages/Home'
import LogIn from './pages/Auth'
import NavBar from './components/navBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [name, setName] = useState(null)

  // useEffect(() =>{
  //   setName('moshe')
  // },[])
    return (
      <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route path='/Home' element={<Home/>} />  
      <Route path='/BudgetTracker' element={<BudgetTracker  name={name}/>} />
      <Route path='/LogIn' element={<LogIn setName={setName} name={name} />} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
