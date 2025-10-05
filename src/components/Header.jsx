import React, { useState } from 'react'
import { Menu } from 'lucide-react';

const Header = () => {

const [navlink,setNavlink] = useState(false)

  return (
    <div className='header'>
      <img src="/logo.png" alt="logo" className='logo'/>
      <button className='hamburger' onClick={() => {setNavlink(!navlink)}}><Menu size={30} /></button>
      <div className='nav-items'>
        <a href="#about">About Us</a>
        <a href="#service">Services</a>
        <a href="#team">Team</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contct US</a>
      </div>

      {navlink && (<div className='nav-items-mobile'>
        <a href="#about">About Us</a>
        <a href="#service">Services</a>
        <a href="#team">Team</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contct US</a>
      </div>)}

      <img className="decore1" src="/decore1.svg" alt=""/>
      <img className="decore2" src="/decore2.svg" alt=""/>
    </div>
  )
}

export default Header
