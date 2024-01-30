import React, { useState } from 'react'

export default function WorkExperince(props) {
  const [workExperince, setWorkExperince]=useState({})
  const [jobs, setJobs]=useState([])
  const handleInputChange = (e) => {
    workExperince[e.target.name] = e.target.value
    setWorkExperince({...workExperince })
    console.log(workExperince);
  };
  const addJob=(e) => {
    e.preventDefault()
    setJobs([...jobs, {...workExperince}])
    setWorkExperince({})
    console.log(jobs);
  
    props.setFormData(jobs)
    console.log(props.formData);
  }
  return (
    <div>
      <label htmlFor="workExperience">Do you have work experience?</label><br />
      <div className="radio-options">
        <label htmlFor="yesWorkExperience" className="radio-label">
          <input
            type="radio"
            name="WorkExperience"
            value="yesWorkExperience"
            checked={props.selectedOption === 'yesWorkExperience'}
            onChange={props.handleOptionChange}
          />
          Yes
        </label>
        <label htmlFor="noWorkExperience" className="radio-label">
          <input
            type="radio"
            name="WorkExperience"
            value="noWorkExperience"
            checked={props.selectedOption === 'noWorkExperience'}
            onChange={props.handleOptionChange}
          />
          No
        </label>
      </div><br />
      {/* //!work experience details */}
      {props.selectedOption === 'yesWorkExperience' ?
        <div className="work-experience-form">
          <label htmlFor="CompanyName">Company name</label><br />
          <input onChange={handleInputChange} type="text" name='CompanyName' className="form-input" /><br />
          <label htmlFor="Role">Role</label><br />
          <input onChange={handleInputChange} type="text" name='Role' className="form-input" /><br />
          <label htmlFor="FrameTime"> Frame time</label><br />
          <input onChange={handleInputChange} type="text" name='FrameTime' className="form-input" /><br />
          <button onClick={addJob} className="form-btn add">Add</button>
        </div>
        : null
      }
    </div>
  )
}
