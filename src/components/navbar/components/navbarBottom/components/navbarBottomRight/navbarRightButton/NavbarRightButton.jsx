import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../../../../../features/user/userSlice';

const NavbarRightButton = () => {
  const dispatch = useDispatch();
  return (
    <a
      href='/sign-up'
      className=' rounded-full px-3.5 border border-gray-800  py-1 text-sm text-gray-800
     hover:bg-gray-800 hover:text-white duration-300'
      onClick={() => dispatch(logOut())}
    >
      Logout
    </a>
  );
};

export default NavbarRightButton;
