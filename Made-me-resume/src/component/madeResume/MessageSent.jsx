import React from 'react'
import { Link } from 'react-router-dom'

export default function MessageSent() {
  return (
    <div>
        <h1>Your resume made!</h1>
        <Link to='/UserResume'>Go see it</Link>
        <button onClick={()=>location.reload()}>Make another one</button>
        
    </div>
  )
}
