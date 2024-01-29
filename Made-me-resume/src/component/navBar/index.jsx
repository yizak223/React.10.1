import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/User";

export default function NavBar() {
    const location = useLocation();
    const { userName, logout } = useContext(UserContext)
    const [path, setPath] = useState();

    useEffect(() => {
        setPath(location.pathname);
    }
        , [location.pathname])


    return (
        <header>
            <nav className="navBar">
                <Link onClick={() => { setPath('/') }} className={path === '/' ? 'nav-link active' : 'nav-link'} to='/'>Home</Link>
                <Link onClick={() => { setPath('/MadeMeResume') }} className={path === '/MadeMeResume' ? 'nav-link active' : 'nav-link'} to='/MadeMeResume'>Made-me-resume</Link>
                <Link onClick={() => { setPath('/UserResume') }} className={path === '/UserResume' ? 'nav-link active' : 'nav-link'} to='/UserResume'>Your Resume</Link>
                {!userName ?
                    <Link onClick={() => { setPath('/Authentication') }} className={path === '/Authentication' ? 'nav-link active' : 'nav-link'} to='/Authentication'>Log-in</Link>
                    : null
                } {userName ?
                    <div className="containerLogUser">
                        <p className="UserHello">hello {userName}</p>
                        <div className="logoutBtnDiv">
                        <button  className="logoutBtn" onClick={logout}>Log out</button>
                        </div>
                    </div>
                    : null}
            </nav>
        </header>
    )
}
