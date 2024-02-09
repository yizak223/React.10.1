import React,{useContext, useEffect, useState} from 'react'
import SmallCardResume from '../savedResumes/SmallCardResume'
import { ExampleResContext } from "../../context/ExampleRes";
import './template1.css'


export default function Template1() {
  // const { resume } = useContext(ExampleResContext)
  // const [res,setRes]=useState({})
  // useEffect(()=>{
  //     setRes(resume)
  // },[res])
  // console.log(resume);
  // console.log(res);
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
  const res ={
    jobs: [{
        Role: 'Developer',
        CompanyName: 'Google',
        Description: `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vero nostrum itaque fugit. Laborum mollitia 
                fugiat nesciunt illum 
                fugit iure culpa harum. Quasi nemo quis eum 
                blanditiis earum delectus suscipit voluptates.`,
        startDate: '2021-01-01',
        endtDate: '2021-01-01',
    }],
    Education: [{
        Degree: 'Bachelor',
        School: 'Ben-Gurion',
        startDate: '2021-01-01',
        endtDate: '2021-01-01',
    }],
    AboutMe: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vero nostrum itaque fugit. Laborum mollitia 
            fugiat nesciunt illum 
            fugit iure culpa harum. Quasi nemo quis eum 
            blanditiis earum delectus suscipit voluptates.`,
    Phone: '0123456789',
    Email: 'example@example.com',
    FullName: 'Lorem Ipsum',
}
  return (
    <>
      <div className='containerTemplateSingle'>
        <>
        <div  className="resumeCard template1">
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

    
    </>
      </div>
    </>

  )
}
