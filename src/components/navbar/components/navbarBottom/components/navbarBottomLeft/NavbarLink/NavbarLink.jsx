import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = ({ link, title }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'underline underline-offset-[15px]'
          : 'hover:underline underline-offset-[15px]'
      }
      to={link}
    >
      {title}
    </NavLink>
  );
};

export default NavbarLink;
