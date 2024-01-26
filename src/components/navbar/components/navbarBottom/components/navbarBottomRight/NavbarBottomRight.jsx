import React from 'react';
import NavbarRightButton from './navbarRightButton/NavbarRightButton';
import { SlBasket } from 'react-icons/sl';

const NavbarBottomRight = () => {
  return (
    <div className='flex gap-6 items-center flex-1 w-full justify-end'>
      <SlBasket size={18} />
      <NavbarRightButton />
    </div>
  );
};

export default NavbarBottomRight;
