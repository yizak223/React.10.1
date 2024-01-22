import '../SignUp/signUp.css'

function LogIn(props) {
    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={props.submitFormLogIn}>
                <input onChange={props.handleInputChangeLogIn} name='email' type="email" placeholder="email@email.com" />
                <input onChange={props.handleInputChangeLogIn} name='password' type="password1" placeholder="*****" />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default LogIn