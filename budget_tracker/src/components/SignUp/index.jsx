import '../SignUp/signUp.css'

function SignUp(props) {
    return(
        <div>
            <h1>SIGN UP</h1>
            <form onSubmit={props.submitForm}>
                <input onChange={props.handleInputChange} type="email" placeholder="email@email.com" />
                <input type="password" placeholder="*****"/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default SignUp