import { Testemonies } from "../../components/Home/Testemonies";
import { About } from "../../components/Home/About";
import { getAuth, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'
import React,{useContext} from "react";
import ThemeProvider from "../../context/Theme";
import {ThemeContext} from "../../context/Theme";

export function Home(props) {
    const { isDarkMode,toggleTheme, selectedTheme } = useContext(ThemeContext);
    console.log({isDarkMode});
    console.log(props.isLoggedIn);
    const auth = getAuth()
    const mysignOut = () => {
        signOut(auth)
            .then(() => {
                alert('Your account has been signed out')
                props.setIsLoggedIn(!props.isLoggedIn)
                location.reload()
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div style={{...selectedTheme}}>
            <button onClick={toggleTheme}>Change dark/light mode</button>
            <h1>Wellcome {props.name ? props.name : null} to our finance web</h1>
            <About />
            <Testemonies />
        </div>
    )
}