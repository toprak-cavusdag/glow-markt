import React from 'react';
import NavbarTop from './components/navbarTop/NavbarTop';
import NavbarBottom from './components/navbarBottom/NavbarBottom';

const Navbar = () => {
  return (
    <nav className='z-0 w-full h-full border-b border-opacity-10'>
      <NavbarTop />
      <NavbarBottom />
    </nav>
  );
};

export default Navbar;
