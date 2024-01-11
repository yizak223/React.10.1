import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Employee from './components/Employee'
import Employee2 from './components/Employee2'
import './App.css'
import Images from './components/Image'
import Counter from './components/Counter'
import Names from './pages/Names'
import Products from './pages/productes'


function App() {
  const name = 'moshenko'
  const age = 45
  const todo = {
    title: 'harry pooter',
    author: 'J.K. Rowling',
  }
  const person1 = {
    name: 'Lisa',
    age: 23,
    role: 'Software Engineer',
    Image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAK0AtwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBQYHCAT/xAA2EAABAwMCAwcCBQMFAQAAAAABAAIDBAURBiESMVEHEyJBYXGBkbEUFTKhwUJDYhYjUtHwCP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3aKIcOML6GRq7HGrzY1UWWsVQZ6L6BHhVcAQYe+3KOzWyevmYS2IDwjzJIAH1K4JPfDPZarvJeGuulbmeXH9oAZyee5PIfwu36h7uurZLTID4qKWRoOwJ5A/H2yvOtzdJFUSU0jGxAPLi1jMcORyG/LGDhRSyzU8N1pZapzo42TMeS0DZocM/OFN9vVTfK99XWcIJyGMY0BrGlxdwjHq4rGlUoJUIiAiIgIiICIiAiIgq4scsrr2je0OlMNNa5qGRsUUYY0wx+GLBAA/US4Hrgbrj6y+nn0rasmuqp6eADxdy4hz99hz5c/qg9GxvjqYWzQuDmOGfUe4VuVgXy6VYTYaUvkfK/uwC+Rx4i4bHOeeVkJGqoxkzAivTNRBtDIsKvgwvp7vCoc3CC3hRhV4TCDTu0WpNutX5jEXtkic2MEDOONwBOPTnj0HVcNv7breaiqulRT0hfA8xz/hGtaW4P6y1u/D/l8ZXXu0x77tSVdjt1vqa6eENdMYi1scLjuOIu/q3Gw6+oXGqWnvdourWCiqYq12QxjmODif8ev75RWDwVSsld5xVVkkxo20spee9jbsOLz28j9FjsFQQiIgIiICIiAiIgIiICnODn7qFXHG6R7WM3c4gAIO89nuo/zu2sjZSPpxA0RngI7vYe38bdVtsgWu6D0u7TdNNDlkjZuF/GfC/O+xG4/96LZntVRj5gpVyZqIN0ICsPCrLlSTlBaLVGFcKjZBq9c242a7VNdBSzV9srS188UGDLTyNaGcYBI4mlrRkDcEct19tbZrXf6Fja+hbJC9vhbK0te355tKzJ9eZUZ22/7Qca1F2PV9RcTNbK4zxySHjdVP8TW55ZxvgefntyXPNcad/wBMaiq7Z34mZGeKN2dywnbi9cL09dLhT2m21NfUua2KnjLznbJ8gvKWorpLer1WXCdxc6eQu36eSKxiKTsoUBERAREQEREBERAX026YQXCmmLOMRyteWf8ALBzhfMpQes4iHsa8NALgCcKiQK1aHCW1UkuR4oGE7Y5tC+h4VR8UwUK7KEQbHlRlQiASoJQqCgglajfNXyG7fkWmIoK+8EEyukd/s0rRsTIRuTy2/nGdtcuE6Rter7FV3e4aeihrfwdXLR1UEo4nTFh3Izjb2OfdBnNZ0N8uMjrHc9SGSXuRUdxHSNjjkwfEAR4jgdeoXGZ4e6nLW54CfA4jHE3OxC6rq3Vd1vtLT3O3sbbKi1iQV1POWnh4uEDHEPjBAPQFcpnq5qgRCaRz+6jEcef6WjkPuoq07mqVKhAREQEREBERAREQF91nonXK6UlE3HFPM1nPGMnC+Fbj2U0Dq/W1F5spw6eQZ8gMZ+pCD0JEwRRtjaAA0YGOilwVxUuCqPmkblQrjwiDNIqsJhBQQoVzCpwgoK1XQsTqav1RSP8A1svMk/qRK0PafofnC2zCw1fp+Oe7i60VdV2+sLGxyvpy0iZjeQe17SCRvg89+aDg3ajrF+pbzJT08bYqGkeWMwPFKQSONx+w8h6krRlvGtezu92GqnqGxOrKFxL21ETckDP9Q8itJexzHlj2lrgcEEYIKiqUREBERAREQEREBERBOF2jsT01+HpJdQVIIknzFTjyDAfEce4GPZcw0lYptRXynt0LTh5zI4HHCwbuP0XqKjo4aCkgpKZgZBBG2ONo8gBgIGFQ4K6QqXBVHzvCKqQIgzShSoQFSqiqSghQpUIMVqyMS6Xu8bpxA11JIHSnYMHDu743K8r3qsZcLvW1sbeFs875Gt6AkkL1je7d+a2att/GI/xELow8jIGRtkeY6jzXkepppKV4jnjfG/AJa9uCMoqwiIoCIiAiIgIiICkNJULe+yjS8V+vv4u4mNltoeF8veO4RI854WfOCT7IOj9j2kTZLQLvWtIrq5nhbkju4jggEdTjPyF0Nyqy04c3hLCMgjlv91bJVRSVbcqiVQSgtPRHlQgzSKpUoIVJVZCjCCnCYVShAGy8t9o9qqbXqu4GcgtnqZHxOAxtxcvTbHwQvUi5P222GB9HLdn4biMEHrJxNbj5BH0RXCUUqFAREQEREBERAVXFtjmqUQd57C7rU11hq6Koe57KKUdznOQ1wJ4c9MgrpDlyn/59Y4UN4fjZ0sY4vUBy6w4KosuVsq64K24ILL1KPCINg4VBaq0QWy1U4V4hUFBbUKoqEFK0Xtjtlwumj3MtcJnMUrZJo2jifwdQPf7re1VgDyAxv6BB4wc0g4IwUDHYzjbqvRHanqKz2JjKWGmojdZyHPkETDJEzrnBwfdaFqmZtPo2jitgAiqI+9ldn9Rduce2w5eXoiuZqFJUKAiIgIiICIiDqXZV2gWzTtILPX0bomTzF765smRxHYcTfIYAG2V3M4IBG4PIjzXjvPuvRnZDqRl60vFSTzNdcKAd09hd4zGP0ux5jGBn0Qbo4KlzVeLeXLcZVDh9eiqPne1FW8IgzSIqSUEkqhxQlUlAKhE8v4QAtV11ru3aTpHNL2S3B2zKcO3bt+o/t9V8PaVrZunrVLDRS93XPy1jwAS13oOu/MrzhXVtTcKmSprZ3zTyHL3vOSVFZG8Xo3i4VNfcDJNPN4hk4Adnfz5Y6KzUXupmpBSnHdDkDvgdB0HVYxQgIiICIiAiIgIiICyFmvNfZK0VtrqpKaoDS0PZ0PMEciFj0Qb/AGLta1Jb6wPuM7bjSuI7yGVoacdWloGD6nK7VprVFp1PSia1VIdJjMtM/aWP3b/I29V5WV6mqZqWdk9LLJDMw5bJG4tc09QQg9cvG+EXB7H2wX2gjEVyhhubANnyeCTPq4bH5GfVQg9IKkqrKhVEYUAZGQCpOy+e5zTQ26rmpWB88cL3RNO+XAEj90H0EY5++Vrmp9RwW6mngppc1PASXMOe7Xny/wCstWSVskdbdqmKQOyY4ZCxo9MBY2l1TdKZhDZg4nPiewE5yD9wFFZPtIqJpb6xsrnEiBpPEcnJzlagvtulyqLpWOqqx5fI4AewHID0XxICIiAiIgIiICIiAiIgIiICIiAiIg9rqkhSvivle62WWuuLYxIaaF0gYTjiI9VUa32g6+o9FxwNdA6qrKgExxNcAGgeZPkCuK6i7V9T3rjjiqjb6d39ulJafl3MrWdS3ut1BeKivuMpfM87DyaPID0WKUVXJI+V5e97nPO5c45JVCIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//2Q=='
  }
  const person2 = {
    name: 'Daniel',
    age: 25,
    Image: 'data:image/jpeg;base64,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',
    role:'programmer'
  }
  const person3 = {
    name: 'Natan',
    age: 30,
    role: 'administrator',
    Image: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
  }
  const man1={
    name: 'Natan',
    age: 30,
    role: 'administrator',
    Image: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
  }

  return (
    <div>
      {/* <Counter/>
      <Counter/> */}
      <h1>Our Team</h1>
      <div >
        <div className='Team'>
          <Employee person={person1} />
          <Employee person={person2} />
          <Employee person={person3} />
        </div>
        <Employee2 man={man1}/>
        <div>
        <Images/>
        <Names/>
        <Products/>
        </div>
      </div>

      {/* <h1>Hellow {name} </h1>
      <h1>Age {age}</h1>
      <p>{todo.title}</p>
      <p>{todo.author}</p>
      <img src={reactLogo} alt="react logo" />
      <img src={viteLogo} alt="vite logo" />
    */}
    </div>
  )
}

export default App
