import React from 'react'

export default function Education(props) {
    return (
        <form>
            <label htmlFor="Education">Education</label> <br />
            <select onChange={props.handleInputChange} name="Education" id="" className="form-select">
                <option value="Select an option" disabled selected>Select an option</option>
                <option value="12schoolyears">12 school years</option>
                <option value="Ahighschooldiploma">A high school diploma</option>
                <option value="BA">BA</option>
                <option value="Professionalcertificate">Professional certificate</option>
            </select><br />
        </form>
    )
}
