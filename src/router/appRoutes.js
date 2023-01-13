import React from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import {Home} from '../components/Home';
import {Portfolio} from '../components/Portfolio';
import {Resume} from '../components/Resume';
import {Services} from '../components/Services';
import {Contact} from '../components/Contact';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h2>404 - Page not found</h2>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
