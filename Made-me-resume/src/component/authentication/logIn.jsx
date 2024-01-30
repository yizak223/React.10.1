import React from 'react'

export default function logIn(props) {
    return (
        <div >
            <h1 className="titleSignUp">Log In</h1>
            <form className="AuthDiv" onSubmit={props.submitFormLogIn}>
                <input className='logInInput' onChange={props.handleInputChangeLogIn} name='email' type="email" placeholder="email@email.com" />
                <input className='logInInput' onChange={props.handleInputChangeLogIn} name='password' type="password1" placeholder="*****" />
                <button className='btnSubmit'>Submit</button>
            </form>
        </div>
    )
}
