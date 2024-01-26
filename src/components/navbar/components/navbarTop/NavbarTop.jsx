import React from 'react';
import NavbarTopLeft from './components/NavbarTopLeft/NavbarTopLeft';
import NavbarTopRight from './components/NavbarTopRight/NavbarTopRight';

const NavbarTop = () => {
  return (
    <div className='bg-glow-green-300 text-slate-50'>
      <div className='container mx-auto flex justify-between py-2.5 text-sm'>
        <NavbarTopLeft />
        <NavbarTopRight />
      </div>
    </div>
  );
};

export default NavbarTop;
