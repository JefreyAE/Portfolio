import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>J</span>
            <h3>Jefrey Arias Esquivel</h3>
        </div>
        <nav>
            <ul>
                <li><NavLink to="/Home" className={({isActive}) => isActive ? "isActive" : ""} >Home</NavLink></li>
                <li><NavLink to="/resume" className={({isActive}) => isActive ? "isActive" : ""} >Resume</NavLink></li>
                <li><NavLink to="/portfolio" className={({isActive}) => isActive ? "isActive" : ""} >Portfolio</NavLink></li>
                <li><NavLink to="/services" className={({isActive}) => isActive ? "isActive" : ""} >Services</NavLink></li>
                <li><NavLink to="/contact" className={({isActive}) => isActive ? "isActive" : ""} >Contact</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
