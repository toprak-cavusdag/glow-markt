import React from 'react';

const SignMiniDesc = ({ desc, routerTitle, route }) => {
  return (
    <p className='mt-4 text-gray-500 text-xs'>
      {desc}{' '}
      <a href={route} className='underline text-glow-green-300'>
        {routerTitle}
      </a>
    </p>
  );
};

export default SignMiniDesc;
