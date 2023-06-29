import React from 'react';
import Hero from '../Components/Hero';
import HeroImg from '../Assets/desert1.avif';
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';
import Footer from '../Components/Footer';
const HomePage = () => {
  return (
    <div>
      <Hero 
      className='hero'
      heroImg={HeroImg}
      title='plan your trip'
      text='choose your destination'
      buttonText='travel plan'
      url='/'
      btnClass='show'
   />
      <Destination/>
      <Trip/>
      <Footer/>
    </div>
  )
}

export default HomePage