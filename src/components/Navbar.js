import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/nexus.png'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const[showMediaIcons ,setShowMediaIcons] = useState(false);
  
  return (
    <>
       <section id="header">
        <a href="#"><img src= {logo} className="logo" alt="Logo"/></a>
        <div>
            <ul  className={showMediaIcons? " menu-link mobile-menu-link" : "menu-link"}>
                <li><a className ="active" href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className='hamburger-menu'>
          <a href="#"  onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>

        </div>
    </section>
    </>
  )
}

export default Navbar
