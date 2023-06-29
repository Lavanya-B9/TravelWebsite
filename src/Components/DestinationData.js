import React, { Component } from 'react';
import  './Destination.Styles.css';

export class DestinationData extends Component {
  render() {
    return (
      <div>
         <div className={this.props.className}>
            <div className='des-text'>
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
              </div>
            <div className='image'>
              <img alt='taj-mahal' src={this.props.img1}/>
              <img alt='taj-mahal' src={this.props.img1}/>
           </div>
        </div>
     </div>
    )
  }
}

export default DestinationData