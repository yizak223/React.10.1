import React from 'react'
import { useState } from 'react'
import Login from '../../components/Authentocation/logIn'
import SignUp from '../../components/Authentocation/signUp'
import { auth } from '../../config/fireBaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import '../Authentication/Auth.css'


export default function Authntication(props) {
  const navigate  = useNavigate();

  const [formDatasSignUp, setFormDatasSignUp] = useState([])
  const [formDatasLogIn, setFormDatasLogIn] = useState([])
  const [formDataSignUp, setFormDataSignUp] = useState({})
  const [formDataLogIn, setFormDataLogIn] = useState({})
  const [logOrSign, setlogOrSign] = useState(false)

  const handleInputChangeSignUp = (e) => {
    formDataSignUp[e.target.name] = e.target.value
    setFormDataSignUp({ ...formDataSignUp })
  }
  const handleInputChangeLogIn = (e) => {
    formDataLogIn[e.target.name] = e.target.value
    setFormDataLogIn({ ...formDataLogIn })
  }

  const submitFormSignUp =  (e) => {
    e.preventDefault()
    console.log(formDataSignUp)
    setFormDatasSignUp([...formDatasSignUp, { ...formDataSignUp }])
    createUserWithEmailAndPassword(auth, formDataSignUp.email, formDataSignUp.password1)
      .then((userCredential) => {
        alert('you have successfully signed up')
        const user = userCredential.user;
        console.log(user);
        navigate('/CurrencyList'); // Change '/dashboard' to the desired URL
      })
      .catch((error) => {
        alert('this email is already registered')
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  const submitFormLogIn =  (e) => {
    e.preventDefault()
    console.log(formDataLogIn)
    setFormDatasLogIn([...formDatasLogIn, {...formDataLogIn}])
    signInWithEmailAndPassword(auth, formDataLogIn.email, formDataLogIn.password)
    .then((userCredential) => {
        alert('hello user')
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigate ('/CurrencyList'); // Change '/dashboard' to the desired URL
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
  return (
    <div>
      {
        logOrSign ?
          <div className="LogIn">
            <SignUp
            submitFormSignUp={submitFormSignUp}
              handleInputChangeSignUp={handleInputChangeSignUp}
            />
            <p>Have an acconout?</p>
            <p className="lgin-signup" onClick={() => setlogOrSign(!logOrSign)}>Log in</p>
          </div>
          : <div className="SignUp">
            <Login
            submitFormLogIn={submitFormLogIn}
              handleInputChangeLogIn={handleInputChangeLogIn}
            />
            <p>Don't have acconout? </p>
            <p className="lgin-signup" onClick={() => setlogOrSign(!logOrSign)}>Sign up</p>
          </div>
      }
    </div>
  )
}
