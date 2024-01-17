import '../LogIn/LogIn.css'

function LogIn(props){
    return(
        <div>
            <h1>LOG IN</h1>
            <form onSubmit={props.submitForm}>
                <input onChange={props.handleInputChange} type="name" placeholder="private name" />
                <input type="text" placeholder="family name"/>
                <input type="email" placeholder="email@email.com"/>
                <input type="password" placeholder="*****"/>
                <input type="password" placeholder="enter your password again"/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default LogIn