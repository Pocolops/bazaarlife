import Image from 'next/image'
import Hero from '../app/components/Hero/hero';
import Products from '../app/components/Products/Products';
import React from 'react';
import { ProductProps } from '../type';

interface Props {
  productData: ProductProps[];
}

export default function Home({ productData }: Props) {
  console.log(productData);
  return (
    <main className="min-h-screen flex-col items-center justify-between pt-32">
      <div className="max-w-full flex flex-col">
        <Hero />
        <Products productData={productData} />
        <h1>BazaarLifeeee</h1>
        <h2>hi</h2>
        <h3>
          <b>"Discover, Shop, and Connect – Your Ultimate Ecommerce Experience with BazaarLife!"</b>
        </h3>
      </div>
    </main>
  );
}

// Data fetching

export const ServerSideProps = async () => {
  try {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
    const productData: ProductProps[] = await res.json();
    return { props: { productData } };
  } catch (error) {
    // Handle error if the fetch or parsing fails
    console.error('Error fetching product data:', error);
    return { props: { productData: [] } };
  }
};