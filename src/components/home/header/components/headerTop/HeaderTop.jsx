import React from 'react';
import headerImage from '../../../../../assets/header-person.png';
import { MdArrowRightAlt } from 'react-icons/md';
const HeaderTop = () => {
  return (
    <div className='bg-glow-green-100 w-full'>
      <section className='container mx-auto flex justify-center items-end'>
        <div className='pb-28'>
          <p className='text-sm font-light'>Casual Style</p>
          <h2 className='my-8 text-4xl font-semibold max-w-md tracking-wide leading-10'>
            Casual and fresh looking Women's is minimal
          </h2>

          <button className='bg-glow-green-300 py-2 px-6 text-center text-white font-semibold flex items-center gap-2'>
            <span>Shop</span> <MdArrowRightAlt size={25} />
          </button>
        </div>

        <div>
          <img className='w-[500px] h-[500px]' src={headerImage} alt='' />
        </div>
      </section>
    </div>
  );
};

export default HeaderTop;
