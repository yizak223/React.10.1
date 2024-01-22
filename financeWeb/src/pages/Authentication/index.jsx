import React from 'react'
import Login from '../../components/Authentocation/logIn'
import SignUp from '../../components/Authentocation/signUp'
export default function Authntication(props) {
  return (
    <div>
      {
        props.isLoggedIn ?
          <div className="LogIn">
            <SignUp />
            <p>Have an acconout?</p>
            <p className="lgin-signup" onClick={() => props.setIsLoggedIn(!props.isLoggedIn)}>Log in</p>
          </div>
          : <div className="SignUp">
            <Login/>
            <p>Don't have acconout? </p>
            <p className="lgin-signup" onClick={() => props.setIsLoggedIn(!props.isLoggedIn)}>Sign up</p>
          </div>
      }
    </div>
  )
}
