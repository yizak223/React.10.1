import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import BookCard from './components/BookCard'
import Books from './pages/Books'
import Product from './pages/Product'
import ProductCard from './components/ProductCard'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



function App() {
const [edit, setEdit] = useState(false)
console.log(edit);
  return (
    <BrowserRouter>
      <nav>
          <Link className={edit?'active':null} to='/Books'> Books</Link>
          <Link className={edit?'active':null} to='/Products'> Product</Link> 
      </nav>
      <Routes>
        <Route path='/Books' element={<Books />} />
        <Route path='/Products' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
