import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectList = ({projects, limit}) => {

  return (
    <section className='jobs'>
        {projects.slice(0,limit).map((project) => {
          return(
          <article key={project.id} className='job-item'>
            <div className='mask'>
              <img src={"/images/"+project.id+".png"} alt=""/>
            </div>
            <span>{project.category}</span>
            <h2><Link to={'/project/'+project.id}>{project.name}</Link></h2>
            <h3>{project.technologies}</h3>
          </article>)
        })}  
      </section>
  )
}
