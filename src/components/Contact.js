import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contact</h1>
        <form className='contact' action='mailto:jefariasj@gmail.com'>
          <input type='text' placeholder='First name'/>
          <input type='text' placeholder='Last name'/>
          <input type='email' placeholder='Email'/>
          <textarea placeholder='Reason for contact'></textarea>
          <input type='submit' value='Send' />
        </form>
    </div>
  )
}
