import React from 'react';
import { NavbarLinks } from '../../../../../../constants/navbar';
import NavbarLink from './NavbarLink/NavbarLink';

const NavbarBottomLeft = () => {
  return (
    <div className='flex gap-16 text-gray-800 flex-1 justify-start'>
      {NavbarLinks.map((nav) => (
        <NavbarLink link={nav.url} title={nav.title} key={nav.id} />
      ))}
    </div>
  );
};

export default NavbarBottomLeft;
