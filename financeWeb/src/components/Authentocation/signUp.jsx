import React from 'react'
import '../Authentocation/Auth.css'

export default function signUp() {
    return (
        <div>
            <h1>Sign Up</h1>
            <form >
                <input name='privateName' type="name" placeholder="private name" />
                <input name='familyName' type="text" placeholder="family name" />
                <input name='email' type="email" placeholder="email@email.com" />
                <input name='password1' type="password" placeholder="*****" />
                <input name='password2' type="password" placeholder="enter your password again" />
                <button>Submit</button>
            </form>
        </div>
    )
}
