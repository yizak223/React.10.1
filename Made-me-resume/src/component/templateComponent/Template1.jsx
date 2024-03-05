import React, { useContext, useEffect, useState } from 'react'
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
      <div className='dateContent'>
        <p className="cardContent">{content}</p>
        <p className='date'>{date}</p>
      </div>

      <p className='cardDescription'>{descriprion}</p>
    </div>
  );
  const SmallCardJobs = ({ title, content }) => (
    <div className="smallCardJobs smallCardJobsReally">
      <p className="cardTitle">{title}</p>
      <p className="cardContent cardContentReally">{content}</p>
    </div>
  );
  const res = {
    jobs: [{
      Role: "Software Engineer",
      CompanyName: "Microsoft",
      Description: "Responsible for developing scalable backend services for Azure cloud platform. Collaborated with cross-functional teams to design and implement features that enhance performance and reliability. Contributed to the development of internal tools for monitoring and debugging cloud services.",
      startDate: "2019-03-15",
      endDate: "2023-07-31"
    }, {
      Role: "Data Scientist",
      CompanyName: "Facebook",
      Description: "As a data scientist at Facebook, I worked on analyzing user engagement patterns and developing algorithms for personalized content recommendations. Utilized machine learning techniques to optimize ad targeting strategies and improve user experience.",
      startDate: "2020-06-15",
      endDate: "2022-12-31"
    }],
    Education: [{
      Degree: "Bachelor's in Mathematics",
      School: "Stanford University",
      startDate: "2016-09-01",
      endDate: "2020-06-30"
    }, {
      Degree: "Bachelor's in Mechanical Engineering",
      School: "Massachusetts Institute of Technology (MIT)",
      startDate: "2017-10-01",
      endDate: "2021-07-15"
    }, {
      Degree: "Bachelor's in Psychology",
      School: "Harvard University",
      startDate: "2018-01-01",
      endDate: "2021-12-31"
    }],
    AboutMe: `I'm a software engineer experienced in building scalable backend solutions. 
              With a background at Google, I focus on innovative technologies to enhance user experiences. 
              Collaborative by nature,
              I strive to deliver high-quality solutions.`,
    Phone: '0123456789',
    Email: 'example@example.com',
    FullName: 'Lorem Ipsum',
  }
  return (
    <>
      <div className='containerTemplateSingle'>
        <>
          <div className="resumeCard template1">
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
              <h3>About Me:</h3>
              <p>{res.AboutMe}</p>
            </div>
            <ul>
              <div className='educationDetails'>
                <li className='blackTitle'>Education</li>
                {res.Education.map((element, index) => (
                  <SmallCardJobs
                    key={index}
                    title={`${element.Degree} at ${element.School}`}
                    content={`${element.startDate} - ${element.endDate}`}
                  />
                ))}
              </div>
              <div className='jobsDetails'>
                <li className='blackTitle'>Jobs</li>
                {res.jobs.map((element, index) => (
                  <SmallCardEducation key={index}
                    title={element.Role}
                    content={`${element.CompanyName}`}
                    date={`${element.startDate} - ${element.endDate}`}
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
