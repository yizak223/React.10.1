import React from "react";

export default function signUp(props) {
  return (
    <div >
      <h1 className="titleSignUp">Sign Up</h1>
      <form className="AuthDiv" onSubmit={props.submitFormRegister}>
        <input className="signUpInput" onChange={props.handleInputChangeRegister} name='privateName' type="name" placeholder="private name" />
        <input className="signUpInput" onChange={props.handleInputChangeRegister} name='familyName' type="text" placeholder="family name" />
        <input className="signUpInput" onChange={props.handleInputChangeRegister} name='email' type="email" placeholder="email@email.com" />
        <input className="signUpInput" onChange={props.handleInputChangeRegister} name='password1' type="password" placeholder="*****" />
        <input className="signUpInput"  onChange={props.handleInputChangeRegister} name='password2' type="password" placeholder="enter your password again" />
        <button className='btnSubmit'>Submit</button>
      </form>
    </div>
  )
}


