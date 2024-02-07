import React, { useState } from 'react';
import SignDesc from './components/signDesc/SignDesc';
import SignTitle from './components/signTitle/SignTitle';
import SignInput from './components/signInput/SignInput';
import SignButton from './components/signButton/SignButton';
import SignImage from './components/signImage/SignImage';
import Image from '../../assets/signin.jpeg';
import SignMiniDesc from './components/signMiniDesc/SignMiniDesc';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { userLogin } from '../../helpers/User';
import { auth } from '../../firebase/firebase';

const SignInContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      userLogin(email);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='border flex justify-center items-center shadow-sm overflow-hidden max-w-3xl  rounded-lg mb-10'>
      <div className='p-10 w-96 flex items-center justify-center flex-col'>
        <SignTitle title={'Sign In'} />

        <SignDesc desc={"Register now, don't miss the benefits 🚀"} />

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

          <SignButton title={'Sign In'} />

          <SignMiniDesc
            route={'sign-up'}
            desc={'Have you not registered before?'}
            routerTitle={' Sign up'}
          />
        </form>
      </div>

      <div className='w-96 h-full'>
        <SignImage src={Image} />
      </div>
    </div>
  );
};

export default SignInContainer;
