import React from 'react';
import SignDesc from './components/signDesc/SignDesc';
import SignTitle from './components/signTitle/SignTitle';
import SignInput from './components/signInput/SignInput';
import SignButton from './components/signButton/SignButton';
import SignImage from './components/signImage/SignImage';
import Image from '../../assets/signin.jpeg';
import SignMiniDesc from './components/signMiniDesc/SignMiniDesc';

const SignInContainer = () => {
  return (
    <div className='border flex justify-center items-center shadow-sm overflow-hidden max-w-3xl  rounded-lg mb-10'>
      <div className='p-10 w-96 flex items-center justify-center flex-col'>
        <SignTitle title={'Sign In'} />

        <SignDesc desc={"Register now, don't miss the benefits 🚀"} />

        <div className='flex gap-5 flex-col items-center justify-center w-full'>
          <SignInput type={'email'} placeholder={'example@exasda.com'} />
          <SignInput type={'password'} placeholder={'password...'} />

          <SignButton title={'Sign In'} />

          <SignMiniDesc
            route={'sign-up'}
            desc={'Have you not registered before?'}
            routerTitle={' Sign up'}
          />
        </div>
      </div>

      <div className='w-96 h-full'>
        <SignImage src={Image} />
      </div>
    </div>
  );
};

export default SignInContainer;
