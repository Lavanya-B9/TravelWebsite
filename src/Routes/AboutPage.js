import React from 'react';
import Hero from '../Components/Hero';
import HeroImg from '../Assets/mountain2.jpg'
import Footer from '../Components/Footer';
import AboutUs from '../Components/AboutUs';

const AboutPage = () => {
  return (
    <div>
      <Hero 
      className='hero-mid'
      heroImg={HeroImg}
      title='plan your trip'
      btnClass='hide'
    />
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default AboutPage