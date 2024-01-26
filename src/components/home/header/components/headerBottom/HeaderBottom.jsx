import React from 'react';
import { HeaderBottomValue } from '../../../../../constants/headerBottomValue';
import HeaderBottomTitle from './components/headerBottomTitle/HeaderBottomTitle';

const HeaderBottom = () => {
  return (
    <div className='bg-glow-green-50 w-full p-9 flex items-center justify-center gap-16 text-gray-800 font-semibold text-xl'>
      {HeaderBottomValue.map((header) => (
        <HeaderBottomTitle
          key={header.id}
          icon={header.icon}
          title={header.title}
          boldness={header?.boldness}
        />
      ))}
    </div>
  );
};

export default HeaderBottom;
