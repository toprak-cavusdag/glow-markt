import React from 'react';
import Header from '../components/home/header/Header';
import FeaturedProduct from '../components/home/featuredProduct/FeaturedProduct';
import Products from '../components/home/products/Products';

const Home = () => {
  return (
    <div>
      <Header />
      <FeaturedProduct />
      <Products />
    </div>
  );
};

export default Home;
