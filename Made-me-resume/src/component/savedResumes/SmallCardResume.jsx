import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, doc, deleteDoc} from 'firebase/firestore';
import { dB } from '../../config/firebaseConfig';

const SmallCardEducation = ({ title, content, descriprion, date }) => (
  <div className="smallCardRealy">
    <p className="cardTitle">{title}</p>
    <p className="cardContent">{content}</p>
    <p className='date'>{date}</p>
    <p className='cardDescription'>{descriprion}</p>
  </div>
);
const SmallCardJobs = ({ title, content }) => (
  <div className="smallCardJobs smallCardJobsReally">
    <p className="cardTitle">{title}</p>
    <p className="cardContent cardContentReally">{content}</p>
  </div>
);

const SmallCardResume = ({ res }) => {
  const Navigate = useNavigate()

  const BigShow = () => {
    Navigate(`/UserResume/${res.id}`)
  }
  const deleteResume = () =>{
    const collectionRef = collection(dB, 'UserDetails')
    const docRef = doc(collectionRef, res.id)
    deleteDoc(docRef)
  }
  return (
    <>
    <div onClick={BigShow} className="resumeCard">
      <div className='containerFirstPargraph'>
        <div className='firstPargraph'>
          <p className='blackTitle roleTitle'>{res.jobs[0].Role}</p>
          <p className='blackTitle nameTitle'>{res.FullName}</p>
        </div>
        <div className='contactDetails blackTitle'>
          <p>{res.Phone}</p>
          <p>{res.Email}</p>
        </div>
      </div>
      <div className="smallCardRealy blackTitle">
        <p>{res.AboutMe}</p>
      </div>
      <ul>
        <div className='educationDetails'>
          <li className='blackTitle'>Education</li>
          {res.Education.map((element, index) => (
            <SmallCardJobs
              key={index}
              title={`${element.Degree} at ${element.School}`}
              content={`${element.startDate} - ${element.endtDate}`}
            />
          ))}
        </div>
        <div className='jobsDetails'>
          <li className='blackTitle'>Jobs</li>
          {res.jobs.map((element, index) => (
            <SmallCardEducation key={index}
              title={element.Role}
              content={`${element.CompanyName}`}
              date={`${element.startDate} - ${element.endtDate}`}
              descriprion={`${element.Description}`}
            />
          ))}
        </div>
      </ul>

    </div>
    <div className='containerButtons'>
      <button className='Delete btnResume btnResumeHover' onClick={deleteResume}><i className="fa-sharp fa-solid fa-trash"></i></button>
    </div>
    
    </>
  );
}

export default SmallCardResume;
