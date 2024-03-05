import React, { createContext, useContext, useEffect, useState } from 'react';

export const ExampleResContext = createContext({}) // th get the values you want and import it

export default function ExampleResProvider  ({ children })  { //to wrap
    const [resume, setResume] = useState({})

    useEffect(()=>{
        setResume({
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
        })
    }
    ,[])

    return(
        <ExampleResContext.Provider value={resume}>
            {children}
        </ExampleResContext.Provider>
    )

}

