import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { userFinder } from './helpers/User';

const root = ReactDOM.createRoot(document.getElementById('root'));

const userStatus = userFinder();
console.log(userStatus);

root.render(
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {!userStatus && (
          <>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='*' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
          </>
        )}

        {userStatus && (
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
  </>
);
