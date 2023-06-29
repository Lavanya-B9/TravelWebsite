import React from 'react';
import './TripStyles.css';
import TripData from './TripData';
import TripImg1 from '../Assets/desert1.avif';
import TripImg2 from '../Assets/forest1.jpg';
import TripImg3 from '../Assets/mountain1.jpg';
const Trip = () => {
  return (
    <div className='trip'>
        <h1>
            Recent Trips
        </h1>
        <p>you can discover unique destinations using google maps</p>
        <div className='tripcard'>
            <TripData
            image={TripImg1}
            heading="Trips in Forests"
            text='he Taj Mahal Was Commissioned By Shah Jahan In 1631, To Be Built In The Memory Of His Wife Mumtaz Mahal, Who Died On 17 June That Year, While Giving Birth To Their 14th Child, Gauhara Begum.[12][13] Construction Started In 1632,[14] And The Mausoleum Was Completed In 1648, While The Surrounding Buildings And Garde'
            />
              <TripData
            image={TripImg2}
            heading="Trips in Forests"
            text='he Taj Mahal Was Commissioned By Shah Jahan In 1631, To Be Built In The Memory Of His Wife Mumtaz Mahal, Who Died On 17 June That Year, While Giving Birth To Their 14th Child, Gauhara Begum.[12][13] Construction Started In 1632,[14] And The Mausoleum Was Completed In 1648, While The Surrounding Buildings And Garde'
            />
              <TripData
            image={TripImg3}
            heading="Trips in Forests"
            text='he Taj Mahal Was Commissioned By Shah Jahan In 1631, To Be Built In The Memory Of His Wife Mumtaz Mahal, Who Died On 17 June That Year, While Giving Birth To Their 14th Child, Gauhara Begum.[12][13] Construction Started In 1632,[14] And The Mausoleum Was Completed In 1648, While The Surrounding Buildings And Garde'
            />
        </div>

    </div>
  )
}

export default Trip