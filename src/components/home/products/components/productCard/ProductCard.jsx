import React from 'react';
import Rating from '@mui/material/Rating';

const ProductCard = ({ title, src, price, rating }) => {
  let rateValue = rating.rate;
  let star = Math.ceil(rateValue);

  return (
    <div className='w-full h-full flex justify-center px-6 text-center py-5 rounded-lg bg-white flex-col items-center relative'>
      <img src={src} className='w-44 h-44 object-contain' alt={title} />
      <div className='flex flex-col justify-center items-center'>
        <h2 className=' font-bold text-lg my-5'>{title}</h2>

        <div className='flex flex-col justify-center items-center gap-5'>
          <p className='text-3xl fontsemi text-glow-green-300'>${price}</p>
          <Rating name='read-only' value={star} readOnly />
          <div className='flex justify-between items-center gap-14 w-full'>
            <button className=' px-6 py-2 text-white bg-glow-green-300'>
              Add Cart
            </button>
            <p className='text-slate-400 text-xs'>Free Shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
