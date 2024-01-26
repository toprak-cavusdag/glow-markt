import React from 'react';
import FooterBackground from './components/footerBackground/FooterBackground';
import FooterCopyRight from './components/footerCopyRight/FooterCopyRight';
import FooterStick from './components/footerStick/FooterStick';
import FooterTitle from './components/footerTitle/FooterTitle';

const Footer = () => {
  return (
    <div className='flex flex-col overflow-hidden text-slate-50 items-center gap-5 relative tracking-wider text-sm justify-center p-16 w-full h-full bg-glow-green-300'>
      <FooterTitle />
      <FooterStick />
      <FooterCopyRight />
      <FooterBackground />
    </div>
  );
};

export default Footer;
