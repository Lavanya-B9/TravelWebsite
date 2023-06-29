import React, { Component } from 'react';
import './NavbarStyles.css'
import { NavItems } from './NavItems';
import {  NavLink } from 'react-router-dom';

export class Navbar extends Component {
  state = {clicked : false};
  handleClick = () =>{
    this.setState({ clicked: !this.state.clicked})
  }
  render() {
    return (

     <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Trippy</h1>
        <div className='menu-icons' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
       </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {
                NavItems.map((item,index)=>{
                    const {title,className,url} = item;
                    return(
                         <li key={index}>
                        <NavLink className={className} to={url} activeClassName='nav-active-link'  activeStyle={{color:'red'}}>{title}</NavLink>
                         </li>
                    )
                })
            }
            <button>Sign up</button>
          </ul>
     </nav>
    )
  }
}

export default Navbar