import React, { useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { checkUser } from './features/user/userSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  const userState = useSelector((state) => state.user.email);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {!userState && (
          <>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='*' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
          </>
        )}

        {userState && (
          <>
            <Route index element={<Home />} />
            <Route path='*' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='/products/:productID' element={<ProductDetail />} />
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
