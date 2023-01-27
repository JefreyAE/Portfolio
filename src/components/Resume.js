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
          <section className='resume-section'>
            <h2>Courses</h2>
            <ul>
              <li className='li-courses'><a href="https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/" target='_blank' rel='noreferrer'>Udemy: Máster en javascript: aprender js, jquery, angular, nodejs</a></li>
              <li className='li-courses'><a href="https://www.udemy.com/course/curso-de-git-y-la-terminal-de-comandos-para-programadores/" target='_blank' rel='noreferrer'>Udemy: Curso de git y la terminal de comandos - para programadores</a></li>
              <li className='li-courses'><a href="https://www.udemy.com/course/master-en-php-sql-poo-mvc-laravel-symfony-4-wordpress/" target='_blank' rel='noreferrer'>Udemy: Máster en php, sql, poo, mvc, Laravel</a></li>
              <li className='li-courses'><a href="https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/" target='_blank' rel='noreferrer'>Udemy: Máster en Frameworks JavaScript: Aprende Angular, React, Vue</a></li>
              <li className='li-courses'><a href="https://www.udemy.com/course/curso-de-seo-online-y-posicionamiento-web-en-google/" target='_blank' rel='noreferrer'>Udemy: Curso de SEO y Posicionamiento web para Desarrolladores web</a></li>
            </ul>
          </section>
        </div>
        <div className='right-content'>
          <section className='resume-section'>
            <h2>Programming languages</h2>
            <ul>
              <p>Javascript</p><div className="container"><div className="skills languages js">80%</div></div>
              <p>PHP</p><div className="container"><div className="skills languages php">70%</div></div>
              <p>SQL</p><div className="container"><div className="skills languages sql">80%</div></div>
              <p>Java</p><div className="container"><div className="skills languages java">50%</div></div>
              <p>Python</p><div className="container"><div className="skills languages python">40%</div></div>
            </ul>
          </section>
          <section className='resume-section'>
            <h2>Frameworks</h2>
            <ul>
              <p>React</p><div className="container"><div className="skills frameworks react">75%</div></div>
              <p>Laravel</p><div className="container"><div className="skills frameworks laravel">70%</div></div>
              <p>NodeJS</p><div className="container"><div className="skills frameworks nodejs">55%</div></div>
              <p>.Net</p><div className="container"><div className="skills frameworks net">55%</div></div>
            </ul>
          </section>
          <section className='resume-section'>
            <h2>Others</h2>
            <ul>
              <p>HTML</p><div className="container"><div className="skills others html">95%</div></div>
              <p>CSS</p><div className="container"><div className="skills others css">90%</div></div>
              <p>MySQL</p><div className="container"><div className="skills others mysql">80%</div></div>
              <p>Git</p><div className="container"><div className="skills others git">75%</div></div>
              <p>JQuery</p><div className="container"><div className="skills others jquery">60%</div></div>
              <p>SEO</p><div className="container"><div className="skills others seo">60%</div></div>
              <p>Docker</p><div className="container"><div className="skills others docker">40%</div></div>
              <p>Jenkins</p><div className="container"><div className="skills others jenkins">35%</div></div>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
