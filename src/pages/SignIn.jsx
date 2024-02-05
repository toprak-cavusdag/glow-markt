import React from 'react';
import signImage from '../assets/signin.jpg';

const SignIn = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='border flex justify-center items-center h-full shadow-sm overflow-hidden max-w-3xl  rounded-lg mb-10'>
        <div className='p-10 w-96 flex items-center justify-center flex-col'>
          <h2 className='text-4xl  font-semibold text-gray-700 tracking-wider'>
            Sign in
          </h2>

          <p className='mb-16 mt-5 text-xs text-gray-400 text-center'>
            "Register now, don't miss the benefits!🚀"
          </p>

          <div className='flex gap-5 flex-col items-center justify-center w-full'>
            <input
              type='email'
              placeholder='example@exasda.com'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 '
            />
            <input
              type='password'
              placeholder='password...'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 '
            />

            <button className='bg-glow-green-300 mt-6 text-slate-50 py-2 px-16 hover:-translate-y-1 hover:shadow-xl duration-300  rounded-full font-semibold'>
              Sign In
            </button>

            <p className='mt-4 text-gray-500 text-xs'>
              Have you not registered before?{' '}
              <a href='/sign-up' className='underline text-glow-green-300'>
                Sign up
              </a>
            </p>
          </div>
        </div>

        <div className='w-96 h-full'>
          <img src={signImage} alt='' className='object-cover' />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
