import React from 'react'
import './template2.css'
export default function Template2() {
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
    <div className='template2'>
        <div className='NameTemplate2'>
            <h1>{res.FullName}</h1>
        </div>
    </div>
  )
}
