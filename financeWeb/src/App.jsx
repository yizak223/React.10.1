import { useEffect, useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import Authntication from './pages/Authentication'
import CurrencyList from './pages/CurrencyList'
import Favourite from './pages/Favourite'
import { dB, auth } from '../src/config/fireBaseConfig'
import { onAuthStateChanged, signOut  } from 'firebase/auth'

function App() {
  const [counter, setcounter] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [name, setName] = useState(null)
  
  // const fetchFinance = () => {
  //   fetch(`https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange?page[number]=2&page[size]=100`)
  //     .then(res => res.json()) 
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.error(err));
  // }
  // fetchFinance()
    
  return (
    <>
    <BrowserRouter>
    <NavBar counter={counter} setcounter={setcounter} />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/CurrencyList" element={<CurrencyList />} />
      <Route path="/Favourite" element={<Favourite />} />
      <Route path="/Authntication" element={<Authntication 
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
