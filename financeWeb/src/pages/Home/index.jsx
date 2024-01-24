import { Testemonies } from "../../components/Home/Testemonies";
import { About } from "../../components/Home/About";
import { getAuth, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'

export function Home(props) {
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
        <div>{props.isLoggedIn ?
            <button onClick={mysignOut}>Log-out</button> :
            <Link
                onClick={() => props.setcounter(2)}
                className={props.counter === 2 ? 'nav-link active' : 'nav-link'}
                to='/Authntication'><button>LogIn</button></Link>}
            <h1>Wellcome {props.name ? props.name : null} to our finance web</h1>
            <About />
            <Testemonies />
        </div>
    )
}