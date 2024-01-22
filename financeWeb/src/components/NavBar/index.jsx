import { Link } from 'react-router-dom'
import '../NavBar/navBar.css'
export function NavBar(props){
    return(
        <nav className="nav-bar">
        <Link
          onClick={() => props.setcounter(0)}
          className={props.counter === 0 ? 'nav-link active' : 'nav-link'}
          to='/Home'
        >
          Home
        </Link>
        <Link
          onClick={() => props.setcounter(1)}
          className={props.counter === 1 ? 'nav-link active' : 'nav-link'}
          to='/CurrencyList'
        >
          Currency
        </Link>
        <Link
          onClick={() => props.setcounter(2)}
          className={props.counter === 2 ? 'nav-link active' : 'nav-link'}
          to='/Authntication'
        >
          LogIn
        </Link>
        <Link
          onClick={() => props.setcounter(3)}
          className={props.counter === 3 ? 'nav-link active' : 'nav-link'}
          to='/Favourite'
        >
          Favourite
        </Link>
      </nav>
    )
}