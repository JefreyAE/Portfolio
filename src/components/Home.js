import React from 'react'
import { Link } from 'react-router-dom'
import { ProjectList } from './ProjectList'
import { projects } from '../data/projects';

export const Home = () => {
  const cards = [
    {title:'JavaScript', url:'images/js.png'},
    {title:'PHP', url:'images/php.png'},
    {title:'Next.Js', url:'images/nextjs2.png'},
    {title:'React', url:'images/react.png'},
    {title:'Laravel', url:'images/laravel.png'},
    {title:'TypeScript', url:'images/ts.png'},
  ]
  return (
    <div className='home'>
      <h1>Hi, my name is  <strong>Jefrey Arias</strong>. I'm a systems engineer dedicated to <strong>Web Development</strong> in Costa Rica, 
          I offer my <strong>programming and development</strong> services in all kinds of web projects.
      </h1>
      <h2 className='contact-me'>
        <Link to={'/contact'}>Contact me</Link>
      </h2>
      <section className='cards-container'> 
        {cards.map((card, index)=>  
          <>
            <div className='card'>
              <div className='face front'>
                <img src={card.url}/>
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
