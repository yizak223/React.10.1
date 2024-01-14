import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import BookCard from './components/BookCard'
import Books from './pages/Books'
import Product from './pages/Product'
import ProductCard from './components/ProductCard'



function App() {

  return (   
      <div>
        <Books/>
        {/* <Product/> */}
    </div>
  )
}

export default App
