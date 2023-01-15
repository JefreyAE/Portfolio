import React from 'react'

export const Resume = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Resume</h1>
      <section className='resume-section'>
        <h2>Work experience</h2>
        <ul>
          <li>
            <h3>Intership GFT - 6 months</h3>
            <p>Worked on the daily tasks of a Full Stack web developer, resolving bugs and developing new features</p>
          </li>
        </ul>
      </section>
      <section className='resume-section'>
        <h2>Skills</h2>
        <ul>
          <li>Proactive</li>
          <li>Analytical thinking</li>
          <li>Mathematical skills</li>
        </ul>
      </section>
      <section className='resume-section'>
        <h2>Programming languages</h2>
        <ul>
          <li>Javascript</li>
          <li>PHP</li>
        </ul>
      </section>
      <section className='resume-section'>
        <h2>Frameworks</h2>
        <ul>
          <li>React</li>
          <li>Laravel</li>
        </ul>
      </section>
      <section className='resume-section'>
        <h2>Education</h2>
        <ul>
          <li>Bachelor degree</li>
          <li>Video game course</li>
        </ul>
      </section>
      <section className='resume-section'>
        <h2>Personal projects</h2>
        <ul>
          <li>Live stock application</li>
          <li>Video game</li>
        </ul>
      </section>
      <section className='resume-section'>
        <h2>Courses</h2>
        <ul>
          <li>Master in React</li>
          <li>Master in PHP</li>
        </ul>
      </section>
    </div>
  )
}
