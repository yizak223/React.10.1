import SignUp from "../../components/SignUp"
import { useState } from "react"
import { useRef } from "react"
import Login from "../../components/LogIn"
import '../Auth/Auth.css'
function Auth(props) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [formData, setFormData] = useState({})

    const handleInputChange = (e) => {
        console.log(e);
        setFormData({...formData,[e.target.name]: e.target.value})
    }
     const submitForm = async (e) => {
        e.preventDefault()
        console.log(formData)
        const emailRef = useRef()
        const passwordRef = useRef()
        await props.signUp()
        // props.setName(e.target.name)
    }
    return(
        <div>
            {
                props.isLoggedIn?
                <div className="LogIn">
                    <SignUp submitForm={submitForm} handleInputChange={handleInputChange}/>
                    <p>Don't have acconout?</p>
                   <p className="lgin-signup" onClick={() => props.setIsLoggedIn(!props.isLoggedIn)}>Log in</p>
                </div>
                :
                <div className="SignUp">
                     <Login submitForm={submitForm} handleInputChange={handleInputChange}/>
                     <p>Have an acconout?</p>
                    <p className="lgin-signup" onClick={() => props.setIsLoggedIn(!props.isLoggedIn)}>Sign up</p>
                </div>
            }
        </div>
    )
}
export default Auth