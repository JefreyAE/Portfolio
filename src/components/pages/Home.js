import React from 'react'
import { Link } from 'react-router-dom'
import { ProjectList } from './components/ProjectList'
import { projects } from '../../data/projects';

export const Home = () => {
  const cards = [
    { title: 'JavaScript', url: 'images/js.png' },
    { title: 'PHP', url: 'images/php.png' },
    { title: 'Next.Js', url: 'images/nextjs2.png' },
    { title: 'React', url: 'images/react.png' },
    { title: 'Laravel', url: 'images/laravel.png' },
    { title: 'TypeScript', url: 'images/ts.png' },
  ]
  return (
    <div className='home'>
      <h1>
        Full Stack developer with practical experience, excelling in technologies such as React, .NET, and MySQL. My
        academic background in Computer Science and currently in Computer Engineering and Web Application
        Development supports my ability to work in diverse environments. Certified in AWS and Azure, my agile approach
        includes SCRUM and DevOps practices with Jenkins and Docker. Proactive collaborator in the development of
        international projects and passionate about innovation in languages such as PHP, JavaScript and frameworks
        such as React and Angular.Eager to contribute my evolving expertise to any dynamic team, I am driven by the
        excitement of embracing new challenges and maintaining a pulse on emerging technologies.
      </h1>
      <h2 className='contact-me'>
        <Link to={'/contact'}>Contact me</Link>
      </h2>
      <section className='cards-container'>
        {cards.map((card, index) =>
          <>
            <div className='card'>
              <div className='face front'>
                <img src={card.url} />
                <h3>{card.title}</h3>
              </div>
              <div className='face back'>
                <h3>{card.title}</h3>
              </div>
            </div>
          </>
        )}
      </section>
      <section className='last-works'>
        <h2 className='heading'>Some of my projects</h2>
        <p>
          These are some of my web development works
        </p>
      </section>
      <ProjectList projects={projects} limit={4} />
    </div>
  )
}
