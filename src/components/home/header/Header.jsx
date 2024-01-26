import React from 'react';

import HeaderTop from './components/headerTop/HeaderTop';
import HeaderBottom from './components/headerBottom/HeaderBottom';

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
};

export default Header;
