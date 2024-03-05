import React, { useState } from 'react'
import { useFormData } from '../../context/FormData';

export default function Education() {
    const { formData, setFormData } = useFormData();
    const [AddDegree, setAddDegree] = useState(false)
    const [educationData,setEducationData] = useState({})

    const handleInputChange = (e) => {
        educationData[e.target.name] = e.target.value
        setEducationData({ ...educationData })
      };

      const addDegree = (e) => {
        e.preventDefault();
        setFormData((prevFormData) => ({
          ...prevFormData,
          Education: [...prevFormData.Education, { ...educationData }],
        }));
        setEducationData({});
        setAddDegree(false)
      };

    return (
        <div>
            <h1>Education</h1>
            <h3>Awesome! Now, what qualifications do you have?</h3>
            <h4 className='secondTitle'>Start with your most recent period of education and work backwards.
                If you have many, just add the most recent and relevant ones.</h4>
            <div className='ExampleWork'>
                <div>
                    <h3>Fashion Merchandising</h3>
                    <h5 className='secondLine'>City College of San Fransisco . Jun 2010 - Mar 2011</h5>
                </div>
                <div>
                    <p className='wordExample'>Example</p>
                </div>
            </div>
            {formData.Education.map((element, index)=>{
                return(
                    <div key={index} className='ExampleWork'>
                        <div>
                            <h3>{element.Degree}</h3>
                            <h5 className='secondLine'>{element.School}. {element.startDate}-{element.endtDate}</h5>
                        </div>
                    </div>
                )
            })}
            <button onClick={() => { setAddDegree(!AddDegree) }} className={!AddDegree ? 'addAnother' : 'Delete'} type='button'>{!AddDegree ? 'Add Another' : 'Delete'}</button>
            {AddDegree ?
                <div>
                    <label htmlFor="Degree"></label>
                    <input required onChange={handleInputChange} type="text" name='Degree' placeholder='Degree(s)' className="form-input" />
                    <label htmlFor="School" ></label>
                    <input required onChange={handleInputChange} type="text" name='School' placeholder='Name of school/ institution' className='form-input' />
                    <div className='dateInput'>
                        <div>
                            <label htmlFor="startDate">Start Date: </label><br />
                            <input required onChange={handleInputChange} type="date" name='startDate' className="form-input" placeholder='Start Date' /><br />
                        </div>
                        <div>
                            <label htmlFor="endtDate">End Date</label><br />
                            <input type="date" onChange={handleInputChange} className="form-input" name='endtDate' /><br />
                        </div>
                    </div>
                    <button type='button' onClick={addDegree} className="form-btn add">Save</button>
                </div>
                : null}
        </div>
    )
}
