import { Link } from 'react-router-dom'
import { useState } from 'react'

function NavBar() {
    const [counter, setcounter] = useState(0)
    console.log(counter);
    return(
        <nav>
            <Link onClick={() => setcounter(0)} className={counter==0?'active':null} to='/Home'> Home</Link>
            <Link onClick={() => setcounter(1)} className={counter==1?'active':null} to='/BudgetTracker'> Budget tracker</Link> 
            <Link onClick={() => setcounter(2)} className={counter==2?'active':null} to='/LogIn'> LogIn</Link> 
        </nav>
    )
}
export default NavBar