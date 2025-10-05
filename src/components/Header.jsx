import React from 'react'
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <div className='header'>
      <img src="/logo.png" alt="logo" className='logo'/>
      <Menu size={30} className='hamburger'/>
      <div className='nav-items'>
        <a href="">About Us</a>
        <a href="">Services</a>
        <a href="">Team</a>
        <a href="">Clients</a>
        <a href="">Contct US</a>
      </div>
    </div>
  )
}

export default Header
