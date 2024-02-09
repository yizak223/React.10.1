import React from 'react'
import './template2.css'
export default function Template2() {
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
  const res = {
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
            <p>skill1</p>
            <p>skill1</p>
            <p>skill1</p>
            <p>skill1</p>
            <p>skill1</p>
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
            <h2 className='TitleRestResume'>Experience</h2>
            {res.jobs.map((element, index) => (
            <SmallCardEducation key={index}
              title={element.Role}
              content={`${element.CompanyName}`}
              date={`${element.startDate} - ${element.endtDate}`}
              descriprion={`${element.Description}`}
            />
          ))}
          </div>
          <div className='EducationContainer'>
            <h2 className='TitleRestResume'>Education</h2>
            {res.Education.map((element, index) => (
            <SmallCardJobs
              key={index}
              title={`${element.Degree} at ${element.School}`}
              content={`${element.startDate} - ${element.endtDate}`}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}
