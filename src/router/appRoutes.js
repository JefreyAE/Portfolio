import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import {Home} from '../components/Home';
import {Portfolio} from '../components/Portfolio';
import {Resume} from '../components/Resume';
import {Services} from '../components/Services';
import {Contact} from '../components/Contact';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Project } from '../components/Project';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <section className='content'>
        <Routes>
            <Route path='/' element={<Navigate to="/home"/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/project/:id' element={<Project/>}/>
            <Route path='*' element={<div className='page'><h2 className='heading'>404 - Page not found</h2></div>}/>
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  )
}
