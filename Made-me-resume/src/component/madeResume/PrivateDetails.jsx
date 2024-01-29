import React from 'react'

export default function PrivateDetails(props) {
  return (
    <form>
        <label htmlFor="FullName">Full Name:</label><br />
      <input onChange={props.handleInputChange}  name='FullName' type="text" className="form-input" /><br />
      <label htmlFor="Email">Email:</label><br />
      <input onChange={props.handleInputChange} name='Email' type="text" className="form-input" /><br />
      <label htmlFor="Phone">Phone: </label><br />
      <input onChange={props.handleInputChange} name='Phone' type="text" className="form-input" /><br />
      <label htmlFor="AboutMe">About me: </label><br />
      <textarea onChange={props.handleInputChange} name="AboutMe" cols="30" rows="10" className="form-textarea"></textarea><br />
    </form>
  )
}
