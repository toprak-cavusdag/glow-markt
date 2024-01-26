import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-col overflow-hidden text-slate-50 items-center gap-5 relative tracking-wider text-sm justify-center p-16 w-full h-full bg-glow-green-300'>
      <h2 className=' text-lg font-semibold tracking-widest'>GlowMart</h2>
      <div className='bg-slate-50 h-px w-full opacity-80 max-w-md' />
      <p>
        Created by
        <Link
          className='italic underline'
          to='https://github.com/toprak-cavusdag'
        >
          Toprak Çavuşdağ
        </Link>{' '}
        All rights reserved
      </p>
      <div className='absolute-center text-[250px] w-full opacity-10 flex justify-center'>
        Glow Markt
      </div>
    </div>
  );
};

export default Footer;
