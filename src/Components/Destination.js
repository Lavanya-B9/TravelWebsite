import React from 'react';
import  './Destination.Styles.css';
import DestinationData from './DestinationData';
import Charminar from '../Assets/charminar1.jpg'; 
import DestinationImg1 from '../Assets/tajmahal.jpg';

const Destination = () => {
  return (
    <div className='destination'>
        <h1> popular destination</h1>
        <p>tours give you the opportunity to explore the world </p>

    <DestinationData
     className='first-des'
     heading='Taj Mahal'
     text='The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, who died on 17 June that year, while giving birth to their 14th child, Gauhara Begum.[12][13] Construction started in 1632,[14] and the mausoleum was completed in 1648, while the surrounding buildings and garden were finished five years later.[15] The imperial court documenting Shah Jahans grief after the death of Mumtaz Mahal illustrates the love story held as the inspiration for the Taj mahal'
     img1={DestinationImg1}
   />

    <DestinationData
      className='first-des-reverse'
      heading='Charminar'
      text='The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, who died on 17 June that year, while giving birth to their 14th child, Gauhara Begum.[12][13] Construction started in 1632,[14] and the mausoleum was completed in 1648, while the surrounding buildings and garden were finished five years later.[15] The imperial court documenting Shah Jahans grief after the death of Mumtaz Mahal illustrates the love story held as the inspiration for the Taj mahal'
      img1={Charminar}
    />
        </div>
  )
}

export default Destination