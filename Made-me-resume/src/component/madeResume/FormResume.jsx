import React from 'react'
import { useState } from 'react';

export default function FormResume() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="form-container">
    <form>
      <label htmlFor="FullName">Full Name:</label><br />
      <input name='FullName' type="text" className="form-input" /><br />
      <label htmlFor="Email">Email:</label><br />
      <input name='Email' type="text" className="form-input" /><br />
      <label htmlFor="Phone">Phone: </label><br />
      <input name='Phone' type="text" className="form-input" /><br />
      <label htmlFor="AboutMe">About me: </label><br />
      <textarea name="AboutMe" cols="30" rows="10" className="form-textarea"></textarea><br />
      <label htmlFor="workExperience">Do you have work experience?</label><br />
      <div className="radio-options">
        <label htmlFor="yesWorkExperience" className="radio-label">
          <input
            type="radio"
            name="option"
            value="yesWorkExperience"
            checked={selectedOption === 'yesWorkExperience'}
            onChange={handleOptionChange}
          />
          Yes
        </label>
        <label htmlFor="noWorkExperience" className="radio-label">
          <input
            type="radio"
            name="option"
            value="noWorkExperience"
            checked={selectedOption === 'noWorkExperience'}
            onChange={handleOptionChange}
          />
          No
        </label>
      </div><br />
      {selectedOption === 'yesWorkExperience' ?
        <div className="work-experience-form">
          <form>
            <label htmlFor="CompanyName">Company name</label><br />
            <input type="text" name='CompanyName' className="form-input" /><br />
            <label htmlFor="Role">Role</label><br />
            <input type="text" name='Role' className="form-input" /><br />
            <label htmlFor="FrameTime"> Frame time</label><br />
            <input type="text" name='FrameTime' className="form-input" /><br />
            <button className="form-btn">Add</button>
          </form>
        </div>
        : null
      }
      <label htmlFor="Education">Education</label><br />
      <select name="Education" id="" className="form-select">
        <option value="Select an option" disabled selected>Select an option</option>
        <option value="12schoolyears">12 school years</option>
        <option value="Ahighschooldiploma">A high school diploma</option>
        <option value="BA">BA</option>
        <option value="Professionalcertificate">Professional certificate</option>
      </select><br />
      <button className='form-btn'>Make resume</button>
    </form>
  </div>
  )
}
