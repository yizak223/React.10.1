import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function connectFirst() {
    const navigate = useNavigate()

    const navigateLogIn =()=>{
        navigate('/Authentication')
    }
  return (
    <div className='form-container'>
        <h1>Please connect first</h1>
        <button className='goSeeItBtn goLogIn' onClick={navigateLogIn}>Log in</button>
    </div>
  )
}
