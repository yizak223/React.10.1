import LogIn from "../../component/authentication/logIn";
import SignUp from "../../component/authentication/signUp";
import Footer from "../../component/Fotter";
import React, { useContext } from 'react'
import { useState } from "react";
import { UserContext } from '../../context/User'
import { useNavigate } from "react-router-dom";
import NavBar from "../../component/navBar";
import styles from './authentication.module.css'

export default function Authentication({ path, setPath }) {
    const navigate = useNavigate();
    const { register, login } = useContext(UserContext)
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
        setFormDatasSignUp([...formDatasSignUp, { ...formDataSignUp }])
        register(formDataSignUp.email, formDataSignUp.password1)
        // navigate('/MadeMeResume');
    }
    const submitFormLogIn = (e) => {
        e.preventDefault()
        setFormDatasLogIn([...formDatasLogIn, { ...formDataLogIn }])
        login(formDataLogIn.email, formDataLogIn.password)
        // navigate('/MadeMeResume');
    }
    return (
        <>
            {/* <NavBar path={path} setPath={setPath} /> */}
            <div className="containerAuth">
                {logOrSign ?
                    <div className="signUpDiv">
                        <SignUp
                            handleInputChangeRegister={handleInputChangeRegister}
                            submitFormRegister={submitFormRegister}
                        />
                        <p>Have an acconout?</p>
                        <p className="lgin-signup" onClick={() => setlogOrSign(!logOrSign)}>Log in</p>
                    </div>
                    :
                    <div className="logInDiv">
                        <LogIn
                            handleInputChangeLogIn={handleInputChangeLogIn}
                            submitFormLogIn={submitFormLogIn}
                        />
                        <p>Don't have acconout? </p>
                        <p className="lgin-signup" onClick={() => setlogOrSign(!logOrSign)}>Sign up</p>
                    </div>
                }

            </div>
            <div className='footerAuth'>
            <Footer />
            </div>
        </>
    )
}
