import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contact</h1>
        <div className='contact-container'>
          <section className='contact-section'>
          <h2>Send an email</h2>
            <form className='contact' action='mailto:jefariasj@gmail.com'>
              <input type='text' placeholder='First name'/>
              <input type='text' placeholder='Last name'/>
              <input type='email' placeholder='Email'/>
              <textarea placeholder='Reason for contact'></textarea>
              <input type='submit' value='Send' />
            </form>
          </section>
          <section className='contact-section'>
            <h2>Social Networks</h2>
            <div  className='social-net'>
            <a href='https://www.linkedin.com/in/jefreyariasesquivel-cr/' target='_blank' rel='noreferrer'><img src='/images/linkedIn.png'/></a><a href='https://www.linkedin.com/in/jefreyariasesquivel-cr/' target='_blank' rel='noreferrer'>jefreyariasesquivel-cr</a>
            </div>
          </section>
        </div>
    </div>
  )
}
