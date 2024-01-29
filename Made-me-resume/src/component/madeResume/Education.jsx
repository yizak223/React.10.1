import React, { useState } from 'react'

export default function Education({ formData, setFormData }) {
    const handleInputChange = (e) => {
        formData[e.target.name] = e.target.value
        setFormData({ ...formData })
        console.log(formData);
    };

    const handleOptionChangeHighSchool = (e) => {
         setHighSchool(e.target.value);
         formData[e.target.name] = e.target.value
        setFormData({ ...formData })
        console.log(formData);
    }
    const handleOptionChangeCollege = (e) => {
         setCollege(e.target.value);
         formData[e.target.name] = e.target.value
         setFormData({ ...formData })
         console.log(formData);
    }
    const handleOptionChangeDegree = (e) => {
        setDegree(e.target.value);
        formData[e.target.name] = e.target.value
        setFormData({ ...formData })
        console.log(formData);
   }
    // const [ishighSchoolDiploma, setisHighSchool]=useState(false)
    const [highSchoolDiploma, setHighSchool] = useState(null)
    const [collegeDiploma, setCollege] = useState(null)
    const [degree, setDegree] = useState(null)
    const [school, setSchool] = useState({})
    const [schoolName, setSchoolName] = useState({})

    return (
        <div>
            <h1>Education</h1>
            {/* <label htmlFor="Education"></label> */}
            {/* //!high school diplome */}
            <div className="radio-options">
                <label htmlFor="Ahighschooldiploma">Do you have a high-school diploma?</label><br />
                <label htmlFor="yesAhighschooldiploma" className="radio-label">
                    <input
                        type="radio"
                        name="Ahighschooldiploma"
                        id='Ahighschooldiploma'
                        value="yesAhighschooldiploma"
                        checked={highSchoolDiploma === 'yesAhighschooldiploma'}
                        onChange={handleOptionChangeHighSchool}
                    />
                    Yes
                </label>
                <label htmlFor="noAhighschooldiploma" className="radio-label">
                    <input
                        type="radio"
                        name="Ahighschooldiploma"
                        value="noAhighschooldiploma"
                        checked={highSchoolDiploma === 'noAhighschooldiploma'}
                        onChange={handleOptionChangeHighSchool}
                    />
                    No
                </label>
            </div><br />
            {
                highSchoolDiploma === 'yesAhighschooldiploma' ?
                    <>
                        <label htmlFor="whereyoulearnSchool">where you learn?</label>
                        <input name='whereyoulearnSchool' onChange={handleInputChange} type="text" className="form-input" />
                    </>
                    : null
            }
            {/* //! a college diploma */}
            <div className="radio-options">
                <label htmlFor="collegediploma">Do you have a college diploma?</label><br />
                <label htmlFor="yescollegediploma" className="radio-label">
                    <input
                        type="radio"
                        name="collegediploma"
                        id='collegediploma'
                        value="yescollegediploma"
                        checked={collegeDiploma === 'yescollegediploma'}
                        onChange={handleOptionChangeCollege}
                    />
                    Yes
                </label>
                <label htmlFor="nocollegediploma" className="radio-label">
                    <input
                        type="radio"
                        name="collegediploma"
                        value="nocollegediploma"
                        checked={collegeDiploma === 'nocollegediploma'}
                        onChange={handleOptionChangeCollege}
                    />
                    No
                </label>
            </div><br />
            {
                collegeDiploma === 'yescollegediploma' ?
                    <>
                        <label htmlFor="whereyoulearnCollege">where you learn?</label>
                        <input name='whereyoulearnCollege' onChange={handleInputChange} type="text" className="form-input" />
                    </>
                    : null
            }
            {/* //!degree */}
            <div className="radio-options">
                <label htmlFor="degree">Do you have a degree?</label><br />
                <label htmlFor="yesdegree" className="radio-label">
                    <input
                        type="radio"
                        name="degree"
                        id='degree'
                        value="yesdegree"
                        checked={degree === 'yesdegree'}
                        onChange={handleOptionChangeDegree}
                    />
                    Yes
                </label>
                <label htmlFor="nodegree" className="radio-label">
                    <input
                        type="radio"
                        name="degree"
                        value="nodegree"
                        checked={degree === 'nodegree'}
                        onChange={handleOptionChangeDegree}
                    />
                    No
                </label>
            </div><br />
            {
                degree === 'yesdegree' ?
                    <>
                        <label htmlFor="whereyoulearndegree">where you learn?</label>
                        <input name='whereyoulearndegree' onChange={handleInputChange} type="text" className="form-input" />
                    </>
                    : null
            }
            {/* 
                <option value="Select an option" disabled selected>Select an option</option>
                <option value="12schoolyears">12 school years</option>
                <option value="Ahighschooldiploma">A high school diploma</option>
                <option value="BA">BA</option>
                <option value="Professionalcertificate">Professional certificate</option> */}
            {/* </select><br /> */}
        </div>
    )
}
