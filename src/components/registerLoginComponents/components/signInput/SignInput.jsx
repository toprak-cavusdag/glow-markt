import React from 'react';

const SignInput = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 '
    />
  );
};

export default SignInput;
