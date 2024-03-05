import React, { useState } from 'react'
import { useFormData } from '../../context/FormData';
import { faL } from '@fortawesome/free-solid-svg-icons';

export default function WorkExperince(props) {
  const { formData, setFormData } = useFormData();
  const [ AddJob, setAddJob]=useState(false)
  const [workExperince, setWorkExperince] = useState({})

  const handleInputChange = (e) => {
    workExperince[e.target.name] = e.target.value
    setWorkExperince({ ...workExperince })
  };

  const addJob = (e) => {
    e.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      jobs: [...prevFormData.jobs, { ...workExperince }],
    }));
    setWorkExperince({});
    setAddJob(false)
  };

  return (
    <div>
      <h1>Work Experience</h1>
      <h3>Great! Let's fill out your work experience next</h3>
      <h4 className='secondTitle'>Start with your most recent position and work backwards.
        Just add the most recent and relevant positions if you have lots of experience.</h4>
      <div className='ExampleWork'>
        <div>
          <h3>Sales Associate</h3>
          <h5 className='secondLine'>Louis Vuitton . Jun 2013- Mar 2017</h5>
        </div>
        <div>
          <p className='wordExample'>Example</p>
        </div> 
      </div>
   { formData.jobs.map((element,index)=>{
    return(
      <div key={index} className='ExampleWork'>
        <div>
          <h3>{element.Role}</h3>
          <h5 className='secondLine'>{element.CompanyName} . {element.startDate}-{element.endtDate}</h5>
        </div>
      </div>
    )
   })  }
      <button onClick={()=>{setAddJob(!AddJob)}} className={!AddJob? 'addAnother': 'Delete'} type='button'>{!AddJob? 'Add Another': 'Delete'}</button>
      {AddJob ?
        <div className="work-experience-form">
          <label htmlFor="workExperience">Experience</label><br />
          <label htmlFor="CompanyName"></label><br />
          <input required onChange={handleInputChange} type="text" name='CompanyName' className="form-input" placeholder='Copmany' /><br />
          <input required onChange={handleInputChange} type="text" name='Role' className="form-input" placeholder='Title/Position' /><br />
          <label htmlFor="Role"></label><br />
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
          <label htmlFor="Description"> </label><br />
          <textarea required onChange={handleInputChange} name="Description" cols="30" rows="10" className="form-textarea" placeholder='Functions and achievements'></textarea><br />
          <button type='button' onClick={addJob} className="form-btn add">Save</button>
        </div>
        : null
      }
    </div>
  )
}
