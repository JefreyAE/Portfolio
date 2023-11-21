import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../../data/projects';

export const Project = () => {

  const { id } = useParams();
  const [project, setproject] = useState({})

  useEffect(() => {
    setproject(projects.find((project) => project.id === id));
  }, [])

  return (
    <div className='page page-job'>
      <div className='mask'>
        <a href={project.url} target='_blank' rel='noreferrer'><img src={"/images/" + project.id + ".png"} alt="/images/imgnotfound.jpg" /></a>
      </div>
      <h1 className='heading'>{project.name}</h1>
      <h2>{project.technologies}</h2>
      <p>{project.description}</p>
      {project.repositories ? (
        <><h3>Repositories:</h3>
          <ul>
              {project.repositories.Front_End && <li key={1}><a href={project.repositories.Front_End} target='_blank' rel='noreferrer'>{project.repositories.Front_End}</a></li>}
              {project.repositories.Back_End && <li key={2}><a href={project.repositories.Back_End} target='_blank' rel='noreferrer'>{project.repositories.Back_End}</a></li>}
          </ul>
        </>) : (<></>)
      }
      <a href={project.url} target='_blank' rel='noreferrer'>See the project online</a>
    </div>
  )
}
