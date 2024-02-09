import React from 'react'
import './template2.css'
export default function Template2() {

  function formatDate(inputDate) {
    const options = { year: 'numeric', month: 'short' };
    return new Date(inputDate).toLocaleDateString('en-US', options);
  }

  const SmallCardExperince = ({ title, content, descriprion, date }) => (
    <div className="containerExperince">
      <div className='containerDetailsExperince'>
        <div>
          <p className="">{title} | {content}</p>
        </div>
        <div>
          <p className=''>{date}</p>
        </div>
      </div>
      <div>
        <p className='descriptionExperince'>{descriprion}</p>
      </div>
    </div>
  );

  const SmallCardEducation = ({ title, content, school }) => (
    <div className="containerEducation">
      <div>
        <p className="contentEducationDegree">{title}</p>
        <p className="contentEducation">{school}</p>
      </div>
      <div>
        <p className="contentEducation dateContainer">{content}</p>
      </div>

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
      startDat: "2020-06-15",
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
    <div className='template2'>
      <div className='leftSide'>
        <div className='NameTemplate2 imgContainer'>
          <img className='profileImg' src="https://cdn-icons-png.freepik.com/512/3135/3135715.png" alt="" />
        </div>
        <div className='restRusume'>
          <div className='AboutMeTemplate2'>
            <p>{res.AboutMe}</p>
          </div>
          <div className='skillsContainer'>
            <h2 className='TitleRestResume'>Skills</h2>
            <p>Project Management</p>
            <p>Data Analysis</p>
            <p>Team Leadership</p>
            <p>Customer Relationship Management</p>
            <p>Problem Solving</p>
          </div>
          <div className='languageContainer'>
            <h2 className='TitleRestResume'>Languages</h2>
            <p>Hebrew - Intermediate</p>
            <p>English - Advanced</p>
            <p>Arabic - Advanced</p>
          </div>
        </div>
      </div>
      <div className='rightSide'>
        <div className='NameTemplate2 contactInfo'>
          <div>
            <h1>{res.FullName}</h1>
            <p className='roleTitle'>{res.jobs[0].Role}</p>
          </div>
          <div className='detailsContactInfo'>
            <div>
              <p className='restDetails'>some adress</p>
              <p className='restDetails'>birthday</p>
            </div>
            <div className='EmailPhone'>
              <p className='restDetails'>{res.Phone}</p>
              <p className='restDetails'>{res.Email}</p>
            </div>
          </div>
        </div>
        <div className='restRusume'>
          <div className='ExperienceContainer'>
            <h2 className='TitleRestResumeRightSide'>Experience</h2>
            {res.jobs.map((element, index) => (
              <SmallCardExperince key={index}
                title={element.Role}
                content={`${element.CompanyName}`}
                date={`${formatDate(element.startDate)} - ${formatDate(element.endtDate)}`}
                descriprion={`${element.Description}`}
              />
            ))}
          </div>
          <div className='EducationContainer'>
            <h2 className='TitleRestResumeRightSide'>Education</h2>
            {res.Education.map((element, index) => (
              <SmallCardEducation
                key={index}
                title={element.Degree}
                school={element.School}
                content={`${formatDate(element.startDate)} - ${formatDate(element.endtDate)}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
