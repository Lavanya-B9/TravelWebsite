import React from 'react';
import Hero from '../Components/Hero';
import HeroImg from '../Assets/river1.jpg'
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';

const ContactPage = () => {
  return (
    <div>
       <Hero 
      className='hero-mid'
      heroImg={HeroImg}
      title='contact us'
      text='choose your destination'
      buttonText='travel plan'
      url='/'
      btnClass='show'
    />
      <ContactForm/>
      <Footer/>

    </div>
  )
}

export default ContactPage