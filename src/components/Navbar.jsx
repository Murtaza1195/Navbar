import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import logo from "../Assets/nexus.png";
import { GiHamburgerMenu } from "react-icons/gi";
import menu from "../data";

// console.warn('menuTest',menu)

// You are passing the prop?yesh
const Navbar = (item) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      {/* Ooper address bar mein pages ka name likh kr enter krey,
       */}
      <section id="header">
        <a href="#">
          <img src={logo} className="logo" alt="Logo" />
        </a>
        <div>
          <ul
            className={
              showMediaIcons ? " menu-link mobile-menu-link" : "menu-link"
            }
          >
            {/* <li>
                  <NavLink to = '/' >{item.about}</NavLink></li>
                <li><NavLink to = '/Services'>{item.services}</NavLink></li>
                <li><NavLink to = 'Blog' >{item.blog}</NavLink></li>
                <li><NavLink to = '/about'>{item.about}</NavLink></li>
                <li><NavLink to = '/Contact'>{item.contact}</NavLink></li> */}
            {menu.map((item) => {
              const { id, text, url } = item;
              return (
                <li key={id}>
                  <NavLink to={url}>{text}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        {/* fat arrow function (map method) kr liyahai yeh topic? to ek separate file bnaey, us file say */}
        <div className='hamburger-menu'>
          <a href="#" onClick={()=> setShowMediaIcons(!showMediaIcons)} >
            <GiHamburgerMenu />
          </a>
         

         

        </div>
      </section>
    </>
  );
};

export default Navbar;
