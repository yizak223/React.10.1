import { Link } from 'react-router-dom'

export function NavBar(props){
    return(
        <nav>
            <Link onClick={() => props.setcounter(0)} className={props.counter==0?'active':null} to='/Home'> Home</Link>
            <Link onClick={() => props.setcounter(1)} className={props.counter==1?'active':null} to='/CurrencyList'> Currency</Link> 
            <Link onClick={() => props.setcounter(2)} className={props.counter==2?'active':null} to='/Authentication'>LogIn</Link> 
            <Link onClick={() => props.setcounter(3)} className={props.counter==2?'active':null} to='/Favourite'>Favourite </Link> 
        </nav>
    )
}