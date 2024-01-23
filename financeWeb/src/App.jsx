import { useEffect, useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import Authntication from './pages/Authentication'
import CurrencyList from './pages/CurrencyList'
import Favourite from './pages/Favourite'
import NotFound from './components/notFoundPage'
import { dB, auth } from '../src/config/fireBaseConfig'
import { onAuthStateChanged, signOut } from 'firebase/auth'

function App() {
  const [counter, setcounter] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [name, setName] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true)
        setName(user.email.substring(0, user.email.indexOf('@')))
        console.log(name);
      } else {
        setIsLoggedIn(false)
        setName(null)
        console.log(isLoggedIn);
        console.log(name);
      }
    })
  }, [])
  console.log(isLoggedIn);

  const fetchFinance = () => {
    fetch(`https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange?page[number]=1&page[size]=100`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        fetch(`https://restcountries.com/v3.1/name/${data.data[80].country}`)
          .then(res => { return res.json() })
          .then(data => { console.log(data) })
          .catch(err => console.error(err))
      })
      .catch((err) => console.error(err));
  }
  // fetchFinance()



  return (
    <>
      <BrowserRouter>
        <NavBar
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
          counter={counter} setcounter={setcounter}
        />
        <Routes>
          <Route path="/Home" element={<Home
            signOut={signOut}
            setIsLoggedIn={setIsLoggedIn}
            name={name}
          />} />
          <Route path="/CurrencyList" element={<CurrencyList />} />
          <Route path="/Favourite" element={<Favourite />} />
          {isLoggedIn ?
            <Route path="/Authntication" element={<NotFound />} />
            : <Route path="/Authntication" element={<Authntication
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              name={name} setName={setName}
            />} />

          }
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
