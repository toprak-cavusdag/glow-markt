import React from 'react';

const ProductImage = ({ src, title }) => {
  return <img src={src} className='w-44 h-44 object-contain' alt={title} />;
};

export default ProductImage;
