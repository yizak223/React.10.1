import React from 'react'
import '../Authentocation/Auth.css'

export default function signUp(props) {
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={props.submitFormSignUp}>
                <input onChange={props.handleInputChangeSignUp} name='privateName' type="name" placeholder="private name" />
                <input onChange={props.handleInputChangeSignUp} name='familyName' type="text" placeholder="family name" />
                <input onChange={props.handleInputChangeSignUp} name='email' type="email" placeholder="email@email.com" />
                <input onChange={props.handleInputChangeSignUp} name='password1' type="password" placeholder="*****" />
                <input onChange={props.handleInputChangeSignUp} name='password2' type="password" placeholder="enter your password again" />
                <button>Submit</button>
            </form>
        </div>
    )
}
