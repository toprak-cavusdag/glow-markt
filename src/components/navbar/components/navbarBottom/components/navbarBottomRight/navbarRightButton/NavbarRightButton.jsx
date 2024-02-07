import React from 'react';

const NavbarRightButton = () => {
  return (
    <a
      href='/sign-up'
      className=' rounded-full px-3.5 border border-gray-800  py-1 text-sm text-gray-800
     hover:bg-gray-800 hover:text-white duration-300'
    >
      Logout
    </a>
  );
};

export default NavbarRightButton;
