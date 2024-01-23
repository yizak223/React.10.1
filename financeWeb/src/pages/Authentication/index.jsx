import React from 'react'
import { useState, useEffect } from 'react'
import Login from '../../components/Authentocation/logIn'
import SignUp from '../../components/Authentocation/signUp'
import { auth } from '../../config/fireBaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth'

export default function Authntication(props) {
  const [formDatasSignUp, setFormDatasSignUp] = useState([])
  const [formDatasLogIn, setFormDatasLogIn] = useState([])
  const [formDataSignUp, setFormDataSignUp] = useState({})
  const [formDataLogIn, setFormDataLogIn] = useState({})

  const handleInputChangeSignUp = (e) => {
    formDataSignUp[e.target.name] = e.target.value
    setFormDataSignUp({ ...formDataSignUp })
  }
  const handleInputChangeLogIn = (e) => {
    formDataLogIn[e.target.name] = e.target.value
    setFormDataLogIn({ ...formDataLogIn })
  }

  const submitFormSignUp = async (e) => {
    e.preventDefault()
    console.log(formDataSignUp)
    setFormDatasSignUp([...formDatasSignUp, { ...formDataSignUp }])
    createUserWithEmailAndPassword(auth, formDataSignUp.email, formDataSignUp.password1)
      .then((userCredential) => {
        alert('you have successfully signed up')
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        alert('this email is already registered')
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  const submitFormLogIn = async (e) => {
    e.preventDefault()
    console.log(formDataLogIn)
    setFormDatasLogIn([...formDatasLogIn, {...formDataLogIn}])
    signInWithEmailAndPassword(auth, formDataLogIn.email, formDataLogIn.password)
    .then((userCredential) => {
        alert('hello user')
      // Signed in 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
        alert('this email is not registered')
        console.log(error);
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}
  useEffect(() => {
    console.log(formDataLogIn);
  }, [formDataLogIn])
  useEffect(() => {
    console.log(formDataSignUp);
  }, [formDataSignUp])
  useEffect(() => {
    console.log(formDatasSignUp)
  }, [formDatasSignUp])
  useEffect(() => {
    console.log(formDatasLogIn);
  }, [formDatasLogIn])

  return (
    <div>
      {
        props.isLoggedIn ?
          <div className="LogIn">
            <SignUp
            submitFormSignUp={submitFormSignUp}
              handleInputChangeSignUp={handleInputChangeSignUp}
            />
            <p>Have an acconout?</p>
            <p className="lgin-signup" onClick={() => props.setIsLoggedIn(!props.isLoggedIn)}>Log in</p>
          </div>
          : <div className="SignUp">
            <Login
            submitFormLogIn={submitFormLogIn}
              handleInputChangeLogIn={handleInputChangeLogIn}
            />
            <p>Don't have acconout? </p>
            <p className="lgin-signup" onClick={() => props.setIsLoggedIn(!props.isLoggedIn)}>Sign up</p>
          </div>
      }
    </div>
  )
}
