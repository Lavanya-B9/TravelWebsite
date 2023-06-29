import React from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Routes/HomePage';
import AboutPage from './Routes/AboutPage';
import ServicePage from './Routes/ServicePage';
import ContactPage from './Routes/ContactPage';

import { Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <div style={{textAlign:'center'}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
         </div>
  )
}

export default App