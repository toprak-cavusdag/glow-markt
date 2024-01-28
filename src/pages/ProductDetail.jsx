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

  return (
    <div className='flex justify-center items-center gap-16 p-5 container mx-auto'>
      <div>
        <img
          className='w-96 h-full object-contain'
          src={productDetail.image}
          alt=''
        />
      </div>
      <div>
        <h2 className='text-3xl font-semibold mb-10'>{productDetail.title}</h2>
        <p className='text-gray-500 my-3.5 tracking-wider max-w-3xl'>
          {productDetail.description}
        </p>
        <div className='flex items-center gap-3'>
          <span>4.2</span>
          <Rating name='read-only' value={4} readOnly />
        </div>
        <p>(251)</p>
      </div>
    </div>
  );
};

export default ProductDetail;
