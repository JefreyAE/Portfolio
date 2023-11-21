import React from 'react';
import { projects } from '../../data/projects';
import { ProjectList } from './components/ProjectList';

export const Portfolio = () => {

  return (
    <div className='page'>
      <h1 className='heading'>Portfolio</h1>
      <ProjectList projects={projects} />
    </div>
  )
}
