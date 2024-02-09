import React from 'react'
import Template1 from '../../component/templateComponent/Template1'
import Template2 from '../../component/templateComponent/Template2'
import Template3 from '../../component/templateComponent/Template3'

export default function TemplateContainer({counter,setCounter}) {
  return (
    <div>
      <div className='titlesContainer'>
        <h1 className='mainTtileTemplate'>Choose a template to create your new resume</h1>
        <h3 className='secondtitleTemplate'>Pick your favorite! You'll be able to change it later</h3>
      </div>
      <div className='containerTemplate'>
        <Template1 />
        <Template2 />
        <Template3 />
        {/* <button onClick={() => setCounter(counter + 1)}>next</button> */}
      </div>

    </div>
  )
}
