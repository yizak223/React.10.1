import React from "react";

export default function signUp(props) {
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={props.submitFormRegister}>
        <input onChange={props.handleInputChangeRegister} name='privateName' type="name" placeholder="private name" />
        <input onChange={props.handleInputChangeRegister} name='familyName' type="text" placeholder="family name" />
        <input onChange={props.handleInputChangeRegister} name='email' type="email" placeholder="email@email.com" />
        <input onChange={props.handleInputChangeRegister} name='password1' type="password" placeholder="*****" />
        <input onChange={props.handleInputChangeRegister} name='password2' type="password" placeholder="enter your password again" />
        <button>Submit</button>
      </form>
    </div>
  )
}


