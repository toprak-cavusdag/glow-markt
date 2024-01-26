import React from 'react';
import HeaderTopImage from './components/headerTopImage/HeaderTopImage';
import HeaderButtonImage from './components/headerButtonImage/HeaderButtonImage';
import HeaderContent from './components/headerContent/HeaderContent';
const HeaderTop = () => {
  return (
    <div className='bg-glow-green-100 w-full'>
      <section className='container mx-auto flex justify-center items-end'>
        <div className='pb-28'>
          <HeaderContent />

          <HeaderButtonImage />
        </div>

        <HeaderTopImage />
      </section>
    </div>
  );
};

export default HeaderTop;
