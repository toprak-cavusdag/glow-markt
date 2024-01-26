import React from 'react';
import NavbarBottomLeft from './components/navbarBottomLeft/NavbarBottomLeft';
import NavbarLogo from './components/navbarLogo/NavbarLogo';
import NavbarBottomRight from './components/navbarBottomRight/NavbarBottomRight';

const NavbarBottom = () => {
  return (
    <div className='flex justify-between items-center pt-7 pb-4 container mx-auto'>
      {/* Links */}
      {/* Logo */}
      {/* Sign up & Basket */}

      <NavbarBottomLeft />
      <NavbarLogo />
      <NavbarBottomRight />
    </div>
  );
};

export default NavbarBottom;
