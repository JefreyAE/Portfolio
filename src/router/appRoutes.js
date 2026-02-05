import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import {Home} from '../components/pages/Home';
import {Portfolio} from '../components/pages/Portfolio';
import {Resume} from '../components/pages/Resume';
import {Services} from '../components/pages/Services';
import {Contact} from '../components/pages/Contact';
import { HeaderNav } from '../components/layouts/HeaderNav';
import { Footer } from '../components/layouts/Footer';
import { Project } from '../components/pages/components/Project';
import { Certifications } from '../components/pages/Certifications';
import Theory from '../components/pages/Theory';
import { Blog } from '../components/pages/Blog';
import { Post } from '../components/pages/Post';

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
            <Route path='/certifications' element={<Certifications/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/theory' element={<Theory/>}/>
            <Route path='/project/:id' element={<Project/>}/>
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<Post />} />
            <Route path='*' element={<div className='page'><h2 className='heading'>404 - Page not found</h2></div>}/>
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  )
}
