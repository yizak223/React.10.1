import React from 'react'
import '../Authentocation/Auth.css'


export default function logIn() {
    return (
        <div>
            <h1>Log In</h1>
            <form>
                <input  name='email' type="email" placeholder="email@email.com" />
                <input  name='password' type="password1" placeholder="*****" />
                <button>Submit</button>
            </form>
        </div>
    )
}
