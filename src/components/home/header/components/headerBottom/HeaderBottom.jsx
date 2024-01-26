import React from 'react';
import { GrDeliver } from 'react-icons/gr';
import { MdOutlineLocalPhone } from 'react-icons/md';

import { GoGift } from 'react-icons/go';

const HeaderBottom = () => {
  return (
    <div className='bg-glow-green-50 w-full p-9 flex items-center justify-center gap-16 text-gray-800 font-semibold text-xl'>
      <h2 className='flex items-center gap-2.5'>
        <GrDeliver size={30} /> Free Shipping
      </h2>
      <h2 className='flex items-center gap-2.5 bg-glow-green-300 text-white p-3.5'>
        <MdOutlineLocalPhone size={30} /> <span>24 Hours Support</span>
      </h2>
      <h2 className='flex items-center gap-2.5'>
        <GoGift size={28} /> <span>Gift For Friend</span>
      </h2>
    </div>
  );
};

export default HeaderBottom;
