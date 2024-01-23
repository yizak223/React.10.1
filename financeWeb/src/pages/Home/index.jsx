import { Testemonies } from "../../components/Home/Testemonies";
import { About } from "../../components/Home/About";
import { getAuth, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'

export function Home(props) {
    const auth = getAuth()
    const mysignOut = () => {
        signOut(auth)
            .then(() => {
                alert('Your account has been signed out')
                props.setIsLoggedIn(!props.isLoggedIn)
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <button onClick={mysignOut}>sign-out</button>
            <h1>Wellcome {props.name ? props.name : null} to our finance web</h1>
            <About />
            <Testemonies />
        </div>
    )
}