import React from 'react';

export const Certification = ({certification}) => {

    const copyCode = (code) => {
        navigator.clipboard.writeText(code);
        console.log(code);
    }

  return (
    <section className='badge'>
        <img src={"/images/"+certification.id+".png"} alt=""/>
        {certification.url && <p><a href={certification.url} target='_blank' rel='noreferrer'>Validate</a></p>}
        {certification.code && <p>Validation code: {certification.code}</p>}
        {certification.code && <button className='btn-copy' onClick={() => copyCode(certification.code)}>Copy</button>}
        {certification.otherUrl && <p><a href={certification.otherUrl} target='_blank' rel='noreferrer'>Visit</a></p>}
    </section>
  )
}
