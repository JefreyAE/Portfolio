import React from 'react'
import { Link } from 'react-router-dom'
import { ProjectList } from './ProjectList'
import { projects } from '../data/projects';

export const Home = () => {
  return (
    <div className='home'>
      <h1>Hi, I'm <strong>Jefrey Arias</strong>, I'm a <strong>Web Developer</strong> in Costa Rica, 
          I offer my <strong>programming and development</strong> services in all kinds of web projects
      </h1>
      <h2 className='contact-me'>
        <Link to={'/contact'}>Contact me</Link>
      </h2>
      <section className='last-works'>
        <h2 className='heading'>Some of my projects</h2>
        <p>
          These are some of my web development works
        </p>
      </section>
      <ProjectList projects={projects} limit={3} />
    </div>
  )
}
