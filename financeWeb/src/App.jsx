import { useEffect, useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import Authntication from './pages/Authentication'
import CurrencyList from './pages/CurrencyList'
import Favourite from './pages/Favourite'
import NotFound from './components/notFoundPage'
import { auth } from '../src/config/fireBaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import BigCard from './components/CurrencyList/BigCard'
import ThemeProvider from './context/Theme'

function App() {
  const [counter, setcounter] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [name, setName] = useState(null)
  const [userId, setuserId] = useState('')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user.uid);
      try{
      setuserId(user.uid)
      if (user) {
        setIsLoggedIn(true)
        setName(user.email.substring(0, user.email.indexOf('@')))
      } else {
        setIsLoggedIn(false)
        setName(null)
        console.log(name);
      }}
      catch(err){
        console.log(err);
      }
    })
  }, [isLoggedIn])

  return (
    <>
      <BrowserRouter>
        <NavBar
          isLoggedIn={isLoggedIn}
          counter={counter} setcounter={setcounter}
          setIsLoggedIn={setIsLoggedIn}
            name={name}
        />
        <Routes>
       
          <Route path="/" element={ <ThemeProvider><Home
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            name={name}
            counter={counter} setcounter={setcounter}
          /></ThemeProvider>} />
          <Route path="/CurrencyList" element={<CurrencyList
            name={name}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            userId={userId} setuserId={setuserId}
          />} />
          <Route path="/CurrencyList/:CurrencyID" element={<BigCard />} />
          <Route path="/Favourite" element={<Favourite 
          setIsLoggedIn={setIsLoggedIn}
           isLoggedIn={isLoggedIn}
           name={name}
           counter={counter} setcounter={setcounter}/>} />
          {isLoggedIn ?
            <Route path="/Authntication" element={<NotFound />} />
            : <Route path="/Authntication" element={<Authntication/>} />

          }
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
