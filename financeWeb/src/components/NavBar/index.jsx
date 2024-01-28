import { Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../NavBar/navBar.css'

export function NavBar(props) {
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
    <header>
      <nav className="nav-bar">
        <section>
          <Link
            onClick={() => props.setcounter(0)}
            className={props.counter === 0 ? 'nav-link active' : 'nav-link'}
            to='/'>Home</Link>

          <Link
            onClick={() => props.setcounter(1)}
            className={props.counter === 1 ? 'nav-link active' : 'nav-link'}
            to='/CurrencyList'>Currency</Link>

          {props.isLoggedIn ? null
            : <Link
              onClick={() => props.setcounter(2)}
              className={props.counter === 2 ? 'nav-link active' : 'nav-link'}
              to='/Authntication'>LogIn</Link>}

          <Link
            onClick={() => props.setcounter(3)}
            className={props.counter === 3 ? 'nav-link active' : 'nav-link'}
            to='/Favourite'>Favourite</Link>
        </section>
        <section>
          {props.isLoggedIn ?
            <div className='containerUserBtn'>
              <button className='userBtn' onClick={mysignOut}><FontAwesomeIcon icon={faUser} /> Account in</button>
              <div className='divForSignOut'> 
                <p > hello {props.name}</p>
                <p className='to-sign-out' onClick={mysignOut}>sign out</p>
              </div>
            </div> :

            <Link
              onClick={() => props.setcounter(2)}
              className={props.counter === 2 ? 'nav-link active' : 'nav-link'}
              to='/Authntication'><button><FontAwesomeIcon icon={faUser} /> Account</button></Link>}
        </section>
      </nav>
    </header>
  )
}