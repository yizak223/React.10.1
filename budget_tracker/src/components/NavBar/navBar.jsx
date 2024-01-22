import { Link } from 'react-router-dom'

function NavBar(props) {
    return(
        <nav>
            <Link onClick={() => props.setcounter(0)} className={props.counter==0?'active':null} to='/Home'> Home</Link>
            <Link onClick={() => props.setcounter(1)} className={props.counter==1?'active':null} to='/BudgetTracker'> Budget tracker</Link> 
            <Link onClick={() => props.setcounter(2)} className={props.counter==2?'active':null} to='/LogIn'> LogIn</Link> 
        </nav>
    )
}
export default NavBar