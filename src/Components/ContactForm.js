import React from 'react';
import './ContactFormStyles.css';

const ContactForm = () => {
  return (
    <div className='form-container'>
        <h1>send a message to us</h1>
        <form>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Email'/>
            <input type='text' placeholder='Subject'/>
            <textarea placeholder='message' rows='4'></textarea>
            <button>Send Message</button>

        </form>
    </div>
  )
}

export default ContactForm