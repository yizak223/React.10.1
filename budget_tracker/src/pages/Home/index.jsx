import Testemonies from "../../components/Home/Testemonies"
import About from "../../components/Home/About"
import { getAuth, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'


function Home(props) {
    const auth = getAuth()
    const mysignOut = () => {
        signOut(auth)
            .then(() => {
                alert('Your account has been signed out')
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <h1>Wellcome to our product</h1>
            {
                props.isLoggedIn ?
                    <>
                        <button onClick={mysignOut}>Log-out</button>
                        <h2>Hello {props.name.substring(0, props.name.indexOf('@'))}</h2>
                    </>
                    : <Link onClick={() => props.setcounter(2)} className={props.counter == 2 ? 'active' : null} to='/LogIn'><button>Log In</button></Link>}

            <Testemonies />
            <About />
        </div>
    )

}
export default Home