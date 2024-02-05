import React from 'react';

const SignButton = ({ title }) => {
  return (
    <button className='bg-glow-green-300 mt-6 text-slate-50 py-2 px-16 hover:-translate-y-1 hover:shadow-xl duration-300  rounded-full font-semibold'>
      {title}
    </button>
  );
};

export default SignButton;
