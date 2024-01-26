import React from 'react';
import { MdArrowRightAlt } from 'react-icons/md';

const HeaderButtonImage = () => {
  return (
    <button className='bg-glow-green-300 py-2 px-6 text-center text-white font-semibold flex items-center gap-2'>
      <span>Shop</span> <MdArrowRightAlt size={25} />
    </button>
  );
};

export default HeaderButtonImage;
