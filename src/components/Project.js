import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export const Project = () => {

    const { id } = useParams();
    const [ project, setproject ] = useState({})

    useEffect(() => {
        setproject(projects.find((project) => project.id === id));
    },[])

  return (
    <div className='page page-job'>
        
        <div className='mask'>
            <img src={"/images/"+project.id+".png"} alt="/images/imgnotfound.jpg"/>
        </div>
        <h1 className='heading'>{project.name}</h1>
        <p>{project.tecnologies}</p>
        <p>{project.description}</p>
        <a href={project.url} target='_blank' rel='noreferrer'>See the project online</a>
    </div>
  )
}
