import React from 'react';
import { Link } from 'react-router-dom';

const FooterCopyRight = () => {
  return (
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
  );
};

export default FooterCopyRight;
