import React from 'react';
import { certifications } from '../data/certifications';
import { Certification } from './Certification';

export const Certifications = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Certifications & Badges</h1>
      <div className='badge-container'>
        {certifications.map(certification =>(<Certification key={certification.id} certification={certification}/>))}
      </div>
    </div>
  )
}
