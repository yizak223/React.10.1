import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [counter, setcounter] = useState(0)
    return (
        <header>
            <nav className="navBar">
                <Link onClick={()=>{setcounter(0)}} className={counter===0?'nav-link active' : 'nav-link'} to='/'>Home</Link>
                <Link onClick={()=>{setcounter(1)}} className={counter===1?'nav-link active' : 'nav-link'} to='/MadeMeResume'>Made-me-resume</Link>
                <Link onClick={()=>{setcounter(2)}} className={counter===2?'nav-link active' : 'nav-link'} to=''></Link>
                <Link onClick={()=>{setcounter(3)}} className={counter===3?'nav-link active' : 'nav-link'} to=''></Link>
            </nav>
        </header>
    )
}
