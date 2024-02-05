import React, { useState } from 'react';
import SignDesc from './components/signDesc/SignDesc';
import SignTitle from './components/signTitle/SignTitle';
import SignInput from './components/signInput/SignInput';
import SignButton from './components/signButton/SignButton';
import SignImage from './components/signImage/SignImage';
import Image from '../../assets/signup.jpeg';
import SignMiniDesc from './components/signMiniDesc/SignMiniDesc';
import { UserSignIn } from '../../services/User';

const SignUpContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='border flex justify-center items-center shadow-sm overflow-hidden max-w-3xl  rounded-lg mb-10'>
      <div className='p-10 w-96 flex items-center justify-center flex-col'>
        <SignTitle title={'Sign Up'} />

        <SignDesc desc={" It's time to step into a new world 🌟"} />

        <form
          onSubmit={submitHandler}
          className='flex gap-5 flex-col items-center justify-center w-full'
        >
          <SignInput
            value={email}
            handleChange={handleChangeEmail}
            type={'email'}
            placeholder={'example@exasda.com'}
          />
          <SignInput
            value={password}
            handleChange={handleChangePass}
            type={'password'}
            placeholder={'password...'}
          />

          <SignButton title={'Sign Up'} />

          <SignMiniDesc
            route={'sign-in'}
            desc={' Have you registered before?'}
            routerTitle={' Sign In'}
          />
        </form>
      </div>

      <div className='w-96 h-full'>
        <SignImage src={Image} />
      </div>
    </div>
  );
};

export default SignUpContainer;
