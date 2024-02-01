import React from 'react'

export default function PrivateDetails(props) {
  return (
    <div>
      <h1>Tell us a little about yourself</h1>
      <h3 >Contact Information</h3>
      <label htmlFor="FullName"></label><br />
      <input required onChange={props.handleInputChange} name='FullName' type="text" className="form-input" placeholder='Full Name' /><br />
      <label htmlFor="Email"></label><br />
      <input required onChange={props.handleInputChange} name='Email' type="text" className="form-input" placeholder='Email' /><br />
      <label htmlFor="Phone"> </label><br />
      <input required onChange={props.handleInputChange} name='Phone' type="text" className="form-input" placeholder='Phone' /><br />
      <label htmlFor="AboutMe">About me: </label><br />
      <textarea required onChange={props.handleInputChange} name="AboutMe" cols="30" rows="10" className="form-textarea" placeholder='Let us know who you are, how employers can get in touch with you, and what your profession is.'></textarea><br />
    </div>
  )
}
