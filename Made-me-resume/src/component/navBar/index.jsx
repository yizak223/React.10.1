import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();
    const [path, setPath] = useState();

    useEffect(() => {
        setPath(location.pathname);
    }
    ,[])

    return (
        <header>
            <nav className="navBar">
                <Link onClick={()=>{setPath('/')}} className={path === '/' ? 'nav-link active' : 'nav-link'} to='/'>Home</Link>
                <Link onClick={()=>{setPath('/MadeMeResume')}} className={path === '/MadeMeResume' ? 'nav-link active' : 'nav-link'} to='/MadeMeResume'>Made-me-resume</Link>
                <Link onClick={()=>{setPath('/Authentication')}} className={path === '/Authentication' ? 'nav-link active' : 'nav-link'} to='/Authentication'>Log-in</Link>
            </nav>
        </header>
    )
}
