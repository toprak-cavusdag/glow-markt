import React from 'react';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import ProductImage from './components/productImage/ProductImage';
import ProductButton from './components/productButton/ProductButton';
import ProductShipping from './components/productShipping/ProductShipping';
import ProductPrice from './components/productPrice/ProductPrice';

const ProductCard = ({ title, src, price, rating, id }) => {
  let rateValue = rating.rate;
  let star = Math.ceil(rateValue);

  return (
    <Link
      to={`/products/${id}`}
      className='w-full h-full flex justify-center px-6 text-center py-5 rounded-lg bg-white flex-col items-center relative'
    >
      <ProductImage src={src} title={title} />
      <div className='flex flex-col justify-center items-center'>
        <h2 className=' font-bold text-lg my-5'>{title}</h2>

        <div className='flex flex-col justify-center items-center gap-5'>
          <ProductPrice price={price} />
          <Rating name='read-only' value={star} readOnly />

          <div className='flex justify-between items-center gap-14 w-full'>
            <ProductButton />
            <ProductShipping />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
