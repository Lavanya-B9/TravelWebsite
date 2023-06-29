import React from 'react';
import Hero from '../Components/Hero';
import HeroImg from '../Assets/river3.jpg';
import Footer from '../Components/Footer';
import Trip from '../Components/Trip';

const ServicePage = () => {
  return (
    <div>
       <Hero 
      className='hero-mid'
      heroImg={HeroImg}
      title='our services'
      text='choose your destination'
      buttonText='travel plan'
      url='/'
      btnClass='show'

      />
      <Trip/>
      <Footer/>
    </div>
  )
}

export default ServicePage