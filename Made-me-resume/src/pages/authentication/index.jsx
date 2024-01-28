import LogIn from "../../component/authentication/logIn";
import SignUp from "../../component/authentication/signUp";
import React,{useContext} from 'react'
import { useState } from "react";
import {UserContext} from '../../context/User'


export default function Authentication() {
    const { user, register, login, logout}=useContext(UserContext)
    const [formDatasSignUp, setFormDatasSignUp] = useState([])
    const [formDatasLogIn, setFormDatasLogIn] = useState([])
    const [formDataSignUp, setFormDataSignUp] = useState({})
    const [formDataLogIn, setFormDataLogIn] = useState({})
    const [logOrSign, setlogOrSign] = useState(false)

    const handleInputChangeRegister = (e) => {
        formDataSignUp[e.target.name] = e.target.value
        setFormDataSignUp({ ...formDataSignUp })
    }
    const handleInputChangeLogIn = (e) => {
        formDataLogIn[e.target.name] = e.target.value
        setFormDataLogIn({ ...formDataLogIn })
    }
    const submitFormRegister = (e) => {
        e.preventDefault()
        console.log(formDataSignUp)
        setFormDatasSignUp([...formDatasSignUp, { ...formDataSignUp }])
        register()
    }
    const submitFormLogIn = (e) => {
        e.preventDefault()
        console.log(formDataLogIn)
        setFormDatasLogIn([...formDatasLogIn, { ...formDataLogIn }])
    }
    return (
        <div>
            {logOrSign ?
                <div>
                   <SignUp 
                    handleInputChangeRegister={handleInputChangeRegister}
                    submitFormRegister={submitFormRegister}
                   />
                    <p>Have an acconout?</p>
            <p className="lgin-signup" onClick={() => setlogOrSign(!logOrSign)}>Log in</p>
                </div>
                :
                <div>
                     <LogIn
                     handleInputChangeLogIn={handleInputChangeLogIn}
                     submitFormLogIn={submitFormLogIn}
                     />
                    <p>Don't have acconout? </p>
            <p className="lgin-signup" onClick={() => setlogOrSign(!logOrSign)}>Sign up</p>
                </div>
            }
        </div>
    )
}