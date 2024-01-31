import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, onSnapshot, doc, deleteDoc, query, getDoc, where, serverTimestamp, orderBy, updateDoc } from "firebase/firestore";
import { dB, auth } from '../../config/firebaseConfig';
import { useContext } from 'react';
import { useFormData } from '../../context/FormData';

const SmallCardEducation = ({ title, content, descriprion, date }) => (
  <div className="smallCard">
    <p className="cardTitle">{title}</p>
    <p className="cardContent">{content}</p>
    <p className='date'>{date}</p>
    <p className='cardDescription'>{descriprion}</p>
  </div>
);
const SmallCardJobs = ({ title, content }) => (
  <div className="smallCardJobs">
    <p className="cardTitle">{title}</p>
    <p className="cardContent">{content}</p>
  </div>
);

export default function BigResume() {
  const { ResumeId } = useParams()
  // const { formData } = useFormData();

  const [resumeData, setResumeData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try{
        const resumeDoc = doc (dB,'UserDetails',ResumeId)
        const docSnapshot = await getDoc(resumeDoc)
        if (docSnapshot.exists()) {
          const docData = docSnapshot.data()
          console.log(docData);
          setResumeData(docData)
          console.log(resumeData);
        }
        else{
          console.log("No such document!");
        }
      }
      catch (error) {
        console.log("Error getting document:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>{
      resumeData?   <div>
      <div  className="resumeCard resumeCardbIG">
      <div className='containerFirstPargraph'>
        <div className='firstPargraph'>
          <p className='blackTitle roleTitle'>{resumeData.jobs[0].Role}</p>
          <p className='blackTitle nameTitle'>{resumeData.FullName}</p>
        </div>
        <div className='contactDetails blackTitle'>
          <p>{resumeData.Phone}</p>
          <p>{resumeData.Email}</p>
        </div>
      </div>
      <div className="smallCard blackTitle">
        <p>{resumeData.AboutMe}</p>
      </div>
      <ul>
        <div className='educationDetails'>
          <li className='blackTitle'>Education</li>
          {resumeData.Education.map((element, index) => (
            <SmallCardJobs
              key={index}
              title={`${element.Degree} at ${element.School}`}
              content={`${element.startDate} - ${element.endtDate}`}
            />
          ))}
        </div>
        <div className='jobsDetails'>
          <li className='blackTitle'>Jobs</li>
          {resumeData.jobs.map((element, index) => (
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
    <button >Delete</button>
    
      <Link to='/UserResume'>Back</Link>
    </div>:null
    }
 
    </>
    
  )
}
