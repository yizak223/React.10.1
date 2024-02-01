import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function connectFirst() {
    const navigate = useNavigate()

    const navigateLogIn =()=>{
        navigate('/Authentication')
    }
  return (
    <div className='form-container'>
        <h1>Sign up to save your progress</h1>
        <button className='goSeeItBtn goLogIn' onClick={navigateLogIn}>SIGN UP FOR FREE!</button>
        <p>By clicking “Sign up for free!”,
           I expressly agree to the Terms and Conditions and Privacy Policy.</p>
        <p>Already have an account? Sign in</p>
    </div>
  )
}
