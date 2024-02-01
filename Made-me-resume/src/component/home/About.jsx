import React from 'react'

export default function About() {
  return (
    <div className='containerHero'>
      <div> <section class="hero">
        <div class="intro-text">
          <h1>
            <span class="hear"> Create your winning resume in just 10 minutes </span> <br />
          </h1>
          <ul className='listOptions'>
            <li>
              <strong>AI Powerful resume builder </strong> with tested beautiful templates
            </li>
            <li>
              <strong>Easier and faster</strong> than a conventional editor
            </li>
            <li>

              Advice of professionals to <strong>get hired faster!</strong>
            </li>
          </ul>
          <p class="btn red" href="#">Choose A Template</p>
          {/* <p class="btn blue" href="#">Subscribe</p> */}
        </div>
        <div class="i-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/u75hUSShvnc"
            title="YouTube video player"
            frameborder="10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <div class="stand-1"></div>
          <div class="stand-2"></div>
        </div>
      </section></div>
    </div>

  )
}
