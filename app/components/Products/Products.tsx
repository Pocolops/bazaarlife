import React from 'react'
import { ProductProps } from '@/type';

const Products = ({productData}: any) => {
  return (
    <div>
      {
        productData && productData.map(({_id,title,brand,category,description,image,isNew,oldPrice,price}: ProductProps) => (
          <p>{title}</p>
        ))}
          
    </div>
  );
};

export default Products