import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const ProductDetail = () => {
  let { productID } = useParams();
  const [productDetail, setProductDetail] = useState([]);

  const productDetailFetch = async () => {
    const data = await fetch(
      `https://fakestoreapi.com/products/${productID}`
    ).then((res) => res.json());
    setProductDetail(data);
  };

  useEffect(() => {
    productDetailFetch();
  }, []);

  let rateValue = productDetail.rating.rate;
  let star = Math.ceil(rateValue);
  return (
    <div className='flex justify-center items-center gap-16 p-5 container mx-auto'>
      <div>
        <img className='w-96 h-full' src={productDetail.image} alt='' />
      </div>
      <div>
        <h2 className='text-3xl font-semibold mb-10'>{productDetail.title}</h2>
        <p className='text-gray-500 my-3.5 tracking-wider max-w-3xl'>
          {productDetail.description}
        </p>

        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-3'>
            <span className='text-lg font-semibold'>4.2</span>
            <Rating name='read-only' value={4.2} readOnly />
          </div>
          <div className='flex items-center gap-3'>
            <span className='text-sm text-gray-400'>281 Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
