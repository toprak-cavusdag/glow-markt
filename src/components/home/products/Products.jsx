import React, { useEffect, useState } from 'react';
import ProductCard from './components/productCard/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  const productFetch = async () => {
    const data = await fetch('https://fakestoreapi.com/products').then((res) =>
      res.json()
    );
    setProducts(data);
  };

  useEffect(() => {
    productFetch();
  }, []);

  return (
    <div className='container mx-auto w-full grid grid-cols-3 justify-center items-center gap-10 mb-16'>
      {products.map((product, index) => (
        <ProductCard
          src={product.image}
          key={index}
          title={product.title}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default Products;
