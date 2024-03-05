import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import styles from './navbar.module.css'
import logo from '../../component/images/RESUMElogo.png'
export default function NavBar({ path, setPath }) {
    const location = useLocation();
    const { userName, logout } = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false);

    const logOutFunction =()=>{
        logout()
        setPath('/')
    }
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        setPath(location.pathname);
    }
        , [location.pathname])


    return (
        <header>
            <nav className="navBar">
                <div className={styles.item}>
                    <img className={styles.logo} src={logo} alt="" />
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                </div>
                <div  className={`${styles.item} ${!isOpen? styles.responsiveNav:styles.responsiveNavOpen }`}>
                    <Link onClick={() => { setPath('/') }} className={path === '/' ? 'nav-link active' : 'nav-link'} to='/'>Home</Link>
                    <Link onClick={() => { setPath('/MadeMeResume') }} className={path === '/MadeMeResume' ? 'nav-link active' : 'nav-link'} to='/MadeMeResume'>Make-me-resume</Link>
                    {
                        userName?
                        <Link onClick={() => { setPath('/UserResume') }} className={path === '/UserResume' ? 'nav-link active' : 'nav-link'} to='/UserResume'>Your Resume</Link>
                        :null
                    }

                    {!userName ?
                        <Link onClick={() => { setPath('/Authentication') }} className={path === '/Authentication' ? 'nav-link active' : 'nav-link'} to='/Authentication'>Log-in</Link>
                        : null
                    } {userName ?
                        <div className="containerLogUser">
                            <p className="UserHello">hello {userName}</p>
                            <div className="logoutBtnDiv">
                                <button className="logoutBtn" onClick={logOutFunction}>Log out</button>
                            </div>
                        </div>
                        : null}
                </div>

            </nav>
        </header>
    )
}
