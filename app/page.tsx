import Hero from '../app/components/Hero/hero';
import Products from '../app/components/Products/Products';
import React from 'react';
import { ProductProps } from '../type';
import { GetServerSideProps } from 'next';

interface Props {
  productData: ProductProps[];
}

export default function Home({ productData }: Props) {
  console.log(productData);
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <div className="max-w-full flex flex-col">
        <Hero />
        <div className='relative md:mt20'>
        <Products productData={productData} />
        </div>
        
        <h1>BazaarLifeeee</h1>
        <h2>hi</h2>
        <h3>
          <b>"Discover, Shop, and Connect – Your Ultimate Ecommerce Experience with BazaarLife!"</b>
        </h3>
      </div>
    </main>
  );
}

