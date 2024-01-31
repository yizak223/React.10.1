import React from 'react';

export default function SmallCardResume({ res }) {

  return (
    <div className='resumeCard'>
      <h1>{res.FullName}</h1>
      <h3>{res.Phone}</h3>
      <h3>{res.Email}</h3>
      <strong><p>{res.AboutMe}</p></strong>
      <br />
      <h2>Education</h2>
      {res.Education.map((element, index) => {
        return (
          <div key={index}>
            <h3>{element.School}</h3>
            <h5 className='secondLine'>{element.Degree}. {element.startDate}-{element.endtDate}</h5>
          </div>
        )
      })}
      {res.jobs.map((element,index)=>{
        return( 
        <div key={index}>
          <h3>{element.Role}</h3>
          <h4>{element.CompanyName}</h4>
          <h5 className='secondLine'> {element.startDate}-{element.endtDate}</h5>
          <strong><p>{element.Description}</p></strong>
        </div>)
      })}
    </div>
  );
}
