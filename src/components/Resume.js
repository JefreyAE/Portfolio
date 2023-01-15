import React from 'react'

export const Resume = () => {
  return (
    <div className='page resume'>
      <h1 className='heading'>Resume</h1>
      <div className='double-page'>
        <div className='left-content'>
          <section className='resume-section'>
            <h2>Work experience</h2>
            <ul>
              <li>
                <h3><a href='https://www.gft.com/cr/es' target='_blank' rel='noreferrer'>GFT-CR Intership</a></h3>
                <p className='period'>2022 - 2023 (6 months)</p>
                <p>Providing help in solving tasks and problems in projects as a Full Stack Web
                developer, for clients abroad, with the help of a highly experienced team</p>
              </li>
            </ul>
          </section>
          <section className='resume-section'>
            <h2>Skills</h2>
            <ul>
              <li>Proactive</li>
              <li>Self-motivation</li>
              <li>Writing programs</li>
              <li>Writing and debugging code</li>
              <li>Analytical thinking</li>
              <li>Mathematical skills</li>
              <li>Accountability</li>
              <li>Curiosity</li>
            </ul>
          </section>
          <section className='resume-section'>
            <h2>Education</h2>
            <ul>
              <h3 className='education-title'>College degree in Computer Science – Web Development</h3>
                <p className='institution'>Universidad Nacional Estatal a Distancia</p>
                <p className='period'>In progress...</p>
              <h3 className='education-title'>Bachelor’s Degree in computer science</h3>
                <p className='institution'>Universidad Nacional Estatal a Distancia</p>
                <p className='period'>2017 - 2021</p>
              <h3 className='education-title'>CONARE English program. Level B1+</h3>
                <p className='institution'>Universidad Nacional Estatal a Distancia</p>
                <p className='period'>2017 - 2021</p>
               <h3 className='education-title'>AWS Re Start Program</h3>
                <p className='institution'>Elev8 Education</p>
                <p className='period'> September 2021 - January 2022</p>
            </ul>
          </section>
        </div>
        <div className='right-content'>
          <section className='resume-section'>
            <h2>Programming languages</h2>
            <ul>
              <p>Javascript</p><div class="container"><div class="skills languages js">80%</div></div>
              <p>PHP</p><div class="container"><div class="skills languages php">70%</div></div>
              <p>SQL</p><div class="container"><div class="skills languages sql">70%</div></div>
              <p>Java</p><div class="container"><div class="skills languages java">50%</div></div>
              <p>Python</p><div class="container"><div class="skills languages python">40%</div></div>
            </ul>
          </section>
          <section className='resume-section'>
            <h2>Frameworks</h2>
            <ul>
              <p>React</p><div class="container"><div class="skills frameworks react">75%</div></div>
              <p>Laravel</p><div class="container"><div class="skills frameworks laravel">70%</div></div>
              <p>NodeJS</p><div class="container"><div class="skills frameworks nodejs">55%</div></div>
              <p>.Net</p><div class="container"><div class="skills frameworks net">55%</div></div>
            </ul>
          </section>
          <section className='resume-section'>
            <h2>Personal projects</h2>
            <ul>
              <li>Live stock application</li>
              <li>Video game - Magic Quest</li>
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
      </div>
    </div>
  )
}
